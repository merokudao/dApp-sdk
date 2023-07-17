using UnityEngine;
using Thirdweb;
using System.Numerics;
using System.Threading.Tasks;
using UnityEngine.UI;
using UnityEngine.Networking;
using System;
using System.Collections;
using TMPro;

public class Prefab_Miscellaneous : MonoBehaviour
{
    private ThirdwebSDK SDK;
    private Contract myContract;
    public GameObject successObjectPrefab; // Add this line to store the prefab
    public event Action OnPaymentProcessingEnded;
    public event Action OnPaymentProcessingStarted;
    

    private void Start()
    {
        SDK = new ThirdwebSDK("polygon", 137);
        myContract = SDK.GetContract("0xc2132D05D31c914a87C6611C10748AEb04B58e8F");
    }

public async Task<bool> CheckAllowance(string ownerAddress, string spenderAddress, decimal amountToCheck)
{
    try
    {
        BigInteger weiAmount = DecimalToWei(amountToCheck);
        string allowance = await ReadAllowance(ownerAddress, spenderAddress);
        BigInteger allowanceAsBigInt = BigInteger.Parse(allowance);
        return allowanceAsBigInt >= weiAmount;
    }
    catch (System.Exception e)
    {
        Debugger.Instance.Log("[Check Allowance] Error", e.Message);
        return false;
    }
}

public async Task<string> ReadAllowance(string ownerAddress, string spenderAddress)
{
    try
    {
        return await myContract.Read<string>("allowance", ownerAddress, spenderAddress);
    }
    catch (System.Exception e)
    {
        Debugger.Instance.Log("[Read Allowance] Error", e.Message);
        return "0";
    }
}






public async void TriggerSetAllowance()
{
    string userAddress = await SDK.wallet.GetAddress(); // Dynamically get userAddress
    string spenderAddress = "0x61e129d8b0836F05b64d7c59500F4fa042EA8c5B";
    decimal amount = 0.5m;
    bool isAllowanceSufficient = await CheckAllowance(userAddress, spenderAddress, amount); // Provide the userAddress argument

    if (isAllowanceSufficient)
    {
        _ = PayWithXion(amount);
    }
    else
    {
        await SetUsdtAllowance(spenderAddress, amount);
    }
}



public async Task SetUsdtAllowance(string spenderAddress, decimal amountToApprove)
{
    try
    {
        BigInteger weiAmount = DecimalToWei(amountToApprove);
        string amountAsString = weiAmount.ToString();
        await myContract.ERC20.SetAllowance(spenderAddress, amountAsString);
        Debugger.Instance.Log("[Set USDT Allowance] Successful", $"Spender: {spenderAddress}, Amount: {amountToApprove}");
        
        // Invoke the event to indicate the payment processing has started
        OnPaymentProcessingStarted?.Invoke();

        _ = PayWithXion(amountToApprove);
    }
    catch (System.Exception e)
    {
        Debugger.Instance.Log("[Set USDT Allowance] Error", e.Message);
    }
}


    private async Task PayWithXion(decimal amount)
{
      // Invoke the event to indicate the payment processing has started
    OnPaymentProcessingStarted?.Invoke();

    string xionApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMHhFMTMxNzJhODI5RjBiQTYyMDIwQ0M4MDJlOGQ2OGFkNDM5NjNGOTgzIiwiY2xpZW50X2lkIjoiN2xjdGk5OXZiaXY2bzB0b2IzcHJyaDFwYjAiLCJjbGllbnRfc2VjcmV0IjoiM3B1M24zMHB1OWYzZmthZWNxMGVzYzF2bHI2OTFwMG9jam5vMjNrYnBncGpjMGxpMWs1IiwiZXhwIjoxNjg2MzAzNzA4LCJpYXQiOjE2ODM3MTE3MDgsImlzcyI6Ilhpb24gR2xvYmFsIFNlcnZpY2UgQVBJIn0.qGuC43veRkNPwSnmDBu4icP_zoy60gydla1dVbB2ekQ";
    string apiUrl = "https://prodp-api.xion.app/api/v2/single/payment";
    string userAddress = await SDK.wallet.GetAddress(); // Dynamically get userAddress
    string productName = "NFT";
    string currency = "usdt";

    UnityWebRequest request = UnityWebRequest.Post(apiUrl, "");
    request.SetRequestHeader("Content-Type", "application/json");
    request.SetRequestHeader("Authorization", $"Bearer {xionApiKey}");
    request.SetRequestHeader("Accept", "application/json");

    string jsonBody = $"{{ \"productName\": \"{productName}\", \"amount\": {amount}, \"currency\": \"{currency}\", \"buyerAddress\": \"{userAddress}\" }}";
    byte[] jsonBodyRaw = new System.Text.UTF8Encoding().GetBytes(jsonBody);
    request.uploadHandler = new UploadHandlerRaw(jsonBodyRaw);

    await request.SendWebRequest();

    if (request.result == UnityWebRequest.Result.ConnectionError || request.result == UnityWebRequest.Result.ProtocolError)
    {
        Debugger.Instance.Log("[Xion Payment] Error", request.error);
    }
    else
    {
        Debugger.Instance.Log("[Xion Payment] Successful", request.downloadHandler.text);

        // Add the object to the player's inventory here.

        // Instantiate the successObjectPrefab
        GameObject successObjectInstance = Instantiate(successObjectPrefab);
        successObjectInstance.SetActive(true);

        // Invoke the event to indicate the payment processing has ended
        OnPaymentProcessingEnded?.Invoke();
    }
}


    private BigInteger DecimalToWei(decimal value)
    {
        return new BigInteger(value * (decimal)Math.Pow(10, 6));
    }

    public async void GetBalance()
    {
        try
        {
            CurrencyValue balance = await ThirdwebManager.Instance.SDK.wallet.GetBalance();
            Debugger.Instance.Log("[Get Balance] Native Balance", balance.ToString());
        }
        catch (System.Exception e)
        {
            Debugger.Instance.Log("[Get Balance] Error", e.Message);
        }
    }

    public async void CustomCall()
    {
        try
        {
            Contract contract = ThirdwebManager.Instance.SDK.GetContract("0x62Cf5485B6C24b707E47C5E0FB2EAe7EbE18EC4c", MY_CUSTOM_CONTRACT_ABI);

            string uri = await contract.Read<string>("uri", 0);
            Debugger.Instance.Log("[Custom Call] Read Custom URI Successful", uri);

            // TransactionResult transactionResult = await contract.Write("claimKitten");
            // Debugger.Instance.Log("[Custom Call] Write Successful", transactionResult.ToString());

            // With Transaction Overrides:
            // await contract.Write("claim", new TransactionRequest
            // {
            //     value = "0.05".ToWei() // 0.05 ETH
            // }, "0xE79ee09bD47F4F5381dbbACaCff2040f2FbC5803", 0, 1);
        }
        catch (System.Exception e)
        {
            Debugger.Instance.Log("[Custom Call] Error", e.Message);
        }
    }

    public async void Authenticate()
    {
        try
        {
            // Generate and sign
            LoginPayload data = await ThirdwebManager.Instance.SDK.wallet.Authenticate("example.com");
            // Verify
            string resultAddressOrError = await ThirdwebManager.Instance.SDK.wallet.Verify(data);
            if (await ThirdwebManager.Instance.SDK.wallet.GetAddress() == resultAddressOrError)
            {
                Debugger.Instance.Log("[Authenticate] Successful", resultAddressOrError);
            }
            else
            {
                Debugger.Instance.Log("[Authenticate] Invalid", resultAddressOrError);
            }
        }
        catch (System.Exception e)
        {
            Debugger.Instance.Log("[Authenticate] Error", e.Message);
        }
    }

   public async void Deploy()
    {
        try
        {
            string address = await ThirdwebManager.Instance.SDK.deployer.DeployNFTCollection(
                new NFTContractDeployMetadata { name = "Unity Collection", primary_sale_recipient = await ThirdwebManager.Instance.SDK.wallet.GetAddress(), }
            );
            Debugger.Instance.Log("[Deploy] Successful", $"Address: {address}");
        }
        catch (System.Exception e)
        {
            Debugger.Instance.Log("[Deploy] Error", e.Message);
        }
    }



    string MY_CUSTOM_CONTRACT_ABI =
        "[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"prevURI\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"newURI\",\"type\":\"string\"}],\"name\":\"ContractURIUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newRoyaltyRecipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newRoyaltyBps\",\"type\":\"uint256\"}],\"name\":\"DefaultRoyalty\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"level\",\"type\":\"uint256\"}],\"name\":\"LevelUp\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"attacker\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"victim\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"level\",\"type\":\"uint256\"}],\"name\":\"Miaowed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"prevOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnerUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"royaltyRecipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"royaltyBps\",\"type\":\"uint256\"}],\"name\":\"RoyaltyForToken\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"startTokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"endTokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"baseURI\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"encryptedBaseURI\",\"type\":\"bytes\"}],\"name\":\"TokensLazyMinted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"victim\",\"type\":\"address\"}],\"name\":\"attack\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"_tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"burnBatch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"claim\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimKitten\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBaseURICount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getBatchIdAtIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDefaultRoyaltyInfo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"getRoyaltyInfoForToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isGamePaused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_baseURIForTokens\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"lazyMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"batchId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"}],\"name\":\"multicall\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"results\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nextTokenIdToMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"salePrice\",\"type\":\"uint256\"}],\"name\":\"royaltyInfo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"royaltyAmount\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_uri\",\"type\":\"string\"}],\"name\":\"setContractURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_royaltyRecipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_royaltyBps\",\"type\":\"uint256\"}],\"name\":\"setDefaultRoyaltyInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"setOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_bps\",\"type\":\"uint256\"}],\"name\":\"setRoyaltyInfoForToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startGame\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopGame\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_claimer\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"verifyClaim\",\"outputs\":[],\"stateMutability\":\"view\",\"type\":\"function\"}]";
}
