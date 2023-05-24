using UnityEngine;
using UnityEngine.UI;

public class PlayerActions : MonoBehaviour
{
    public Transform cam;
    public float playerActivateDistance;
    public GameObject buyButton; // Assign the buy button (Text or TextMeshPro) in the Inspector
    public GameObject processingSpinner; // Assign the processing spinner in the Inspector
    private Prefab_Miscellaneous prefabMiscellaneous;
    private bool active = false;

    private void Start()
    {
        if (cam == null)
        {
            cam = Camera.main.transform;
        }

        // Hide both the button and spinner by default
        buyButton.SetActive(false);
        processingSpinner.SetActive(false);
    }

   private void Update()
{
    RaycastHit hit;
    active = Physics.Raycast(cam.position, cam.TransformDirection(Vector3.forward), out hit, playerActivateDistance);

    Debug.DrawRay(cam.position, cam.TransformDirection(Vector3.forward) * playerActivateDistance, Color.red);

    if (active)
    {
        prefabMiscellaneous = hit.transform.GetComponent<Prefab_Miscellaneous>();
        if (prefabMiscellaneous != null)
        {
            // Show the button when the player is within the activation distance
            buyButton.SetActive(true);

            if (Input.GetKeyDown(KeyCode.F))
            {
                // Subscribe to the events
                prefabMiscellaneous.OnPaymentProcessingStarted += HandlePaymentProcessingStarted;
                prefabMiscellaneous.OnPaymentProcessingEnded += HandlePaymentProcessingEnded;

                prefabMiscellaneous.TriggerSetAllowance();
            }
        }
        else
        {
            // Hide the button if the hit object doesn't have a Prefab_Miscellaneous component
            buyButton.SetActive(false);
        }
    }
    else
    {
        // Hide the button if the player is not within the activation distance
        buyButton.SetActive(false);
    }
}

 private void HandlePaymentProcessingStarted()
    {
        // Hide the buy button and show the processing spinner
        buyButton.SetActive(false);
        processingSpinner.SetActive(true);
    }
// The method that will be invoked when the payment processing ends
private void HandlePaymentProcessingEnded()
{
    // Show the buy button and hide the processing spinner
    buyButton.SetActive(true);
    processingSpinner.SetActive(false);
    
    // Unsubscribe from the event to avoid multiple subscriptions
    if (prefabMiscellaneous != null)
    {
        prefabMiscellaneous.OnPaymentProcessingEnded -= HandlePaymentProcessingEnded;
    }
}
}