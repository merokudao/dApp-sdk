import type { Meta, StoryObj } from '@storybook/react';
import ChatsList from './ChatsList';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Chats/ChatsList',
  component: ChatsList,
 
} satisfies Meta<typeof ChatsList>;

export default meta;
type Story = StoryObj<typeof meta>;


const data=[
  {
      "chatId": "3571bf3c2273b13d0d24e8a8133ad95f5309bf0b85b6f46bfcb9deb8f01bcc14",
      "about": null,
      "did": "eip155:0xb44a29524433dBC639C35124459c741bC241d4f4",
      "intent": "eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
      "intentSentBy": "eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
      "intentTimestamp": "2023-07-25T13:21:56.000Z",
      "publicKey": "{\"key\":\"-----BEGIN PGP PUBLIC KEY BLOCK-----\\n\\nxsBNBGNwp6ABCAC7OVMgDVmEETjhSnJU5zSzC5/0pU/rDO2zY9kIKxvaeT0o\\nMspIeQTg2t/eLXoyEzfE32xqODcLqjUWOmtyTIY+Ws9Ydd6iONWARXIXk1Rn\\npUAE3SL6mj9MEMOt4sBS8vLg42YCDq1nSgVi9YtKW1hsvzjCHvbc437xaLVu\\nyBBJOqTkU0XbmpPyFEw+laaEAGyIYSKp1XNgDxBY1tbWev17NTm8C9h1AV1E\\nZjcb74NOxWL39gdrzoRNOoXg6SCMpCCPXCzbptR4YP13Dp3j1LbzFpWgIa/h\\nuI3NiprgtpH4eB2a6eVlCmoWQMJJjYdbCcIxnAH5hOjY8lm/evUn7v+TABEB\\nAAHNAMLAigQQAQgAPgUCY3CnoAQLCQcICRCAwIuuc6EJTAMVCAoEFgACAQIZ\\nAQIbAwIeARYhBAoZA3x82Ra7dxN7EYDAi65zoQlMAADk1gf/bho+iCbLAV9m\\nWevLuqCZEMwUiHV6Pbmpf6lXxm1pamL+SQ12WHWWbcyOc8ZLvhle9nDprXfm\\nH1Hj1pOEiuqZ+g7fakKC4kSorpQ4vJE2b4m50Q/OTCZPEnOVIbnToTlbHnXh\\n69hmjQWrvsZOiPz6AiJ0WIpSiUv8qL3H8kCR2eCBxLAUWj8o6ztj7/3tQKzu\\nhr6oxMHrbFhzFyMUAcVP9Lz0EOMX2X9m3fagr7czsxGvcA2bd84W4lIXNk7N\\ndaqaytRpIu/QhFjeAAKj7NoA1VvJBrJJkuOo+Xy3NeBNu6RCSXuuLbOWsq3h\\nUjdM9Fa2OAUqtHU734Ax/u1PF1r3S87ATQRjcKegAQgAm7dyYoaKupPrD+gQ\\nGpJaQb59yUBxCxssUnuaw5O9JrCSHF2cUv7JSWUg3HoEtFlpsnZswpac7+DO\\nZNg1npjCj8/8SJVdOTlyh4iYizQmSqBFXfVZy1EvylL1KvR1fPu/zsz9cvcG\\nBivIf21EbjpBcOB5tPR5yx+AbvlQ2LTeRB7pTwwEWZEuygNE2x6AKejwMUhg\\ntHKItiesZx2UJ2rFFHzD93iCvcgK+HkLf4/uqul0QO/pEBNaWqG5+ZVAlfru\\nkQdBw4QcNLRM4hHTM1wDdtv9D26AVC9HvLNbJR1uhyUz1IPz00+Cm2x3v+6C\\nfN1UrjxClMuLtwBQ+qvD8c/gIQARAQABwsB2BBgBCAAqBQJjcKegCRCAwIuu\\nc6EJTAIbDBYhBAoZA3x82Ra7dxN7EYDAi65zoQlMAAArPwf5AXV7mMWONhxc\\nnNjqCghgUloEvx9KZO6miZnCDXw0RbMJkqQULPQVzoCcJy/6a4INhhQxlDbk\\nTSfjbkuHeKjK7gSmRUl61aTuXbIW+xsiVVgf6/p+BnI5sZ8USVNt8LEDM2fj\\nFAJc4o+R0BQSD38BZiicaVFKBws5cKzflbADVKzpzfBQkeXixkf9YQ8TTHC4\\nS0t4ZAa3XHWltABmueXZRTBnkknILP409M1Rv6lXUtsmzWIq7yMRRNUWIilp\\naGq4sMTwfzTCkNaSM9ad6UWTfxvAOXKfhHj653oo9s7cNclbuDqxqbd7VSg8\\nlKUfE7o/BXhF/A+5lNE4JdZ0Oj8hbQ==\\n=gYvk\\n-----END PGP PUBLIC KEY BLOCK-----\\n\",\"signature\":\"eip191:0x0dd9d371febbfa9274fc400c1f23261ab997e2f01adca20ad3ae0ca65177c026730ef9bdebe4a9b633cbe9ae4ec95a6e720f79f37e97354bde352a75371cb3f91c\"}",
      "profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAy0lEQVR4AcXBoW0DQRCG0c+TJabu4soxWnrS8qAtY1sY6eigK8ctBJkaJnR8YKVTEv3vXT6/Pr5Jwgf/qbZOZogZYoZYCR9ktXWy8MFv1NbJwgeZIWaIGWKFg21fyNbWycIHM7V1sm1fyK68M8QMMUOscLDeH2Thg+x1c2bCB9naOlk4bwwxQ8wQK5y03h/MhHOKIWaIGWKFg/DBXwofzBhihpghVmrrnBE+mKmtc4YhZogZYmXbF7LrszFTW2cmfDDzujmZIWaIGWI/VjkwD8EMoAoAAAAASUVORK5CYII=",
      "threadhash": "bafyreiemedyzhfwwamyvomg7lmkzmb3w772a4o7ih5m7yuacstl5zajcye",
      "wallets": "eip155:0xb44a29524433dBC639C35124459c741bC241d4f4",
      "combinedDID": "eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD_eip155:0xb44a29524433dBC639C35124459c741bC241d4f4",
      "name": "orange-interior-sailfish",
      "groupInformation": null,
      "msg": {
          "fromDID": "eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
          "toDID": "eip155:0xb44a29524433dBC639C35124459c741bC241d4f4",
          "messageObj": {
              "content": "hii"
          },
          "messageContent": "hii",
          "messageType": "Text",
          "timestamp": 1690271515815,
          "fromCAIP10": "eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
          "toCAIP10": "eip155:0xb44a29524433dBC639C35124459c741bC241d4f4",
          "encryptedSecret": "-----BEGIN PGP MESSAGE-----\n\nwcBMAyCIPoRGprQ9AQgAkwL9L4f0Bxnt8fCuUhNAgULWpn2fnp1YdbHjYVzI\n47OnrjlBZJM1PWi/OMO6qasIQyjQo0HMiJQDuac29gpZDlS1agjq+gDZ9htq\nsS2WOAcugK7YO5cwFdH8l3P5Pta8xFXdTPWTIGDVhdL9ICps7zcguEbJ3MG5\nwDLfmZZQu42r7rTA6DtwIDuSo/HUep+UyzZnt1DXq19PnB8rRKwGlBEATNWC\nzbp1g96nD+YuMbnPpzw9xDZ97RBx1OW244lFjVme95CISJlO6QjqfiO84vY9\nWsGV5vqWMZwJ/4mRj1SFZXaww5tKjgtT99eS6pZdhHmT0i8OFklDtokqWH+z\nKcHATANIV9yk5fJU0wEIAIpNTK7w9UKD2JOY1ZQWUGNKVrOLZ+G9mxBCbR4R\nyyaiWWPpg4BliQXESVUlN3CrXlaSEcRjNNiV8GFNBaLF7zT/e9tzkRBUOyUz\nBfZ0zOyqYSSESPgHB9JZy7Pv6h1FnUm88JNtbzQt0rtBoIlj+CSbT1CWwhib\nsLK8MbTgPwSzyjLOb3FXSRD+75rEBOnXH/YhoVgXb0I/SsKDR2Uk7b4O8dIB\nyLdaCbd9z6fQIs+uOsUsNV7i2wsYYH/ISqt3fjyfF3MBPFkJFWd+nioeORQ1\nRQ31Z7h3HB8iPy2GTqnNPWmRnWOIMCDdbgUYeh7V1QGrJwW9xkEBivS8Wxys\njXTSQAHMR8tg5g1ipHOSi0k7ieI5F0ySKkqnobenwcYQd89UIc/FCmZT3GaL\nnZcuiIerW60mG9ib9bTsVthyPxgvOXg=\n=eTWq\n-----END PGP MESSAGE-----\n",
          "encType": "pgp",
          "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJkv38XCZCv/3otNN/wYRYhBDAa/mHkxRm4Emn6H6//ei00\n3/BhAAACjgf/cv5VOSDkcgsuAPcgDSbkDE1dMUT9tdyO3HSaDQQCCf1wp4z6\nmRK/jWBDxcSumfFIo3i8wPDtjBNq1Q+Of47+2YFfIZh7YJcb1Fi7Tq+K5WFI\n5WbHc9A8FJEutjBaWQHdR0ClEKTsv2Me5y2TQQ5cDbF1jYZd2l7eI4LNl0Kh\nAvRqIJ6TM6UtlP25X2MJF3LIPt5EfKn/xyewpidZRhl0TdRNZX5DbLSJFJdT\nr8o63HkZihkGHMq0iacj46GVvIIcUxPmG7+QqaTBgTjQJXPpHEDfYTIFFZzK\n6fYe4cKFYtN4HgMpg62nc+5HIvzkoRmimT/V0POemEo0B0MHDItAew==\n=5Qp5\n-----END PGP SIGNATURE-----\n",
          "sigType": "pgpv2",
          "verificationProof": "pgpv2:-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJkv38XCZCv/3otNN/wYRYhBDAa/mHkxRm4Emn6H6//ei00\n3/BhAAA+2wf+MFhuNjgOMh4/LEF+wKfVOcTSwdeYRBMq4FjmVVUdpqOzkFEN\nlZx2npPRvSXopqNjDvdeAYCmG1YPknkFTSH+SvZLbwuAqS6nLxuz+dWti89r\n5kOUa7W91wxphvmg896OILcpjOa9X5FpZbxWwiqu1B5n0rtpy9y9d/rCztaj\n6L3IdRqoNdITQ96SR0cTjg/U6w+UNVKwT+DQiJosccLTjz+CANo8fx1j8sCY\nUi0xkTcj3fUoJ/QIB+tkKuNbHm+fyYnsgFRpn+GUHgYg/r/S2fXuz2zUoBPe\naewTQcxVqKtCHRKX+cQZ0B0C+8tMh2MU4Xue6KAYsx2BcHKMUrxgmA==\n=xR7d\n-----END PGP SIGNATURE-----\n",
          "link": null
      }
  },
  {
      "chatId": "b681cc5658c23099be7a5b28b928a78f7d0ddb0bfc5bdac8a8d8d3e001248574",
      "about": null,
      "did": "eip155:0x5a00469f73DaC7c4F6Caa501fEBd1b8F8F559914",
      "intent": "eip155:0x5a00469f73DaC7c4F6Caa501fEBd1b8F8F559914+eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
      "intentSentBy": "eip155:0x5a00469f73DaC7c4F6Caa501fEBd1b8F8F559914",
      "intentTimestamp": "2023-06-22T21:20:06.000Z",
      "publicKey": "{\"key\":\"-----BEGIN PGP PUBLIC KEY BLOCK-----\\n\\nxsBNBGSUZlUBCACv/UT3w7Bq7+k+XZtDTI+416brTZHlCPCT/aV57nKRv7Kg\\nVZlyBYKeRVk26CAEDMqFe7ewPsKZSt5u4/LnrtQMigQFWvPrn/kbE4+D5fSA\\nDkaaP9cmDhvFNM3eLU5i12abPZkfoE8quEgD9BGgs6fiOJPGuTygkdiOzLiY\\nV993ZNh1oOmxairkR56uhDh8dlOCVi8Af+Fk736wx2DaEydJuulLbQc5zNJt\\nlfFWTXBa4YgW4R4ZWudqd52EoFvO2ouJ9DEQ2sxa30/Dvri5nAGQLV0DSvaz\\n2T0iuhSiQ7BuIg9waEM4B7LREBqxxJp7cFQVlz8xv3Kr15jWzag76QFDABEB\\nAAHNAMLAigQQAQgAPgWCZJRmVQQLCQcICZA0STvQnhFvAAMVCAoEFgACAQIZ\\nAQKbAwIeARYhBD1BW753PI+zk0SU6TRJO9CeEW8AAAALHQf9Gx43UiSDxR68\\n9m/n0kA7QKPrRsnMzuw8K+MWz+TfoiFY1W3H34VaOZV3JOKwQYOJikttOl0d\\nBJ0gbnDhMKIuib3H7++UmGFeYputE0SP8fYJe8Cs382Ox9WD3zTR404YYNrp\\nqqqMfIk6/sxze0suZwgbegy/b5VvkQhbuN4P4gRgUpkXE8NgZ8UIhQFItySq\\n4P+oLQZHZuEGF4CvTcZOHeuUhCKKrk/NRDOu9U9XdYRYMi2dHgjMiao8BL3z\\nd7aZJTS3CYP9VKI/SiM+qCZeE1c4oO/fccy6fmaBPoRj5ijvgLjlTrTpjhCr\\nVX2oaO9WX5HgHzbx0Lcw0wOJW5kgMs7ATQRklGZVAQgArTmPB2XxU6aStuh9\\nzfU4tWT5BcChPasrrFoMtKlYIAcVVd96pGdZ9gwt/t5A2HihZbCiHcBAE/d7\\ng7fpCC7jagVF/Qq90n3jFV+JQl1k8exXbDOs5yy8hjS4mRCeKXZwi5U26uhR\\n3Mkqyf2mYJXE5g3Zh+ag8ouxB/uuvFefdnwqGslIhR4b4FEVrU64gFaB8IQW\\nlz90wYHJzU632+a69s9mkDsBhY3vierAudrFYeTlFKyrmBh9ugQZUcJqLYkU\\nBqr1bKaSObd5tvbh9/nIlUMMzpQIHPvnDg5Jg0TL8j9kAe4MZIwDpStrzaLJ\\nxga0KtrEWvF8ldtHndszjnDGWQARAQABwsB2BBgBCAAqBYJklGZVCZA0STvQ\\nnhFvAAKbDBYhBD1BW753PI+zk0SU6TRJO9CeEW8AAAAYhgf+PXc74Oxld2cP\\nv21D4TijmVtnxgrUctpiL+yUOnKClcm6Pb331L/+ekFya0eWyIjdu/HJEJ6d\\n9YCgv1+RvtIWyew7O1+NyiKv4ARnwWntdv83dRRQ/HkIEiiMHKypTtjtaFCt\\n2sQau5RGTHqV9I8NPaHqsUgHCeUohkGu1FGfSkpEhq/5+/9Z4gGiSGasZ8Oj\\nZSZGNM77DOMvm4M1DUum2Q8tdIr4WLx3j+70FlzgL33/dDX2uqB9o5jxkgQi\\nHFadtFS2DUTSnf9p/xoVZiTqSvucQRHbU8HG88TzEmcR7XtrsTjXHiw4+2IN\\n+1j/CJl6F06msNesXkz2JK2AHVddNA==\\n=WHmN\\n-----END PGP PUBLIC KEY BLOCK-----\\n\",\"signature\":\"eip191:0x831743c508775d1633e986efdc7601fbb0b14d309826654a299453b4c4a335d96cb15942e36a3cda829e2ea47d918a91f6e24ba6569eb20091e978ca3848d3111c\"}",
      "profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVR4AcXBsWnDQBTH4Z8eqr3HocIDuFCjxhNkhRiuuzmue2BDBkmjRmQEI26ZgNL+SXFgEnjfNzwubwdi2hZUbgXlqdKTW0F5qqh9XlFGMCOYEWw4P08HwlOlZ59XeqZtoSe3gjKCGcGMYCMvmraF/2QEM4IZwUZPFbXPK+r++ER5qvTkVlC39yvKt4oyghnBjGBjbgV144ryVFG5FXo8VdTOisqtoIxgRjAj2PD1/XHQkVtBear05FZQnio9RjAjmBFs5Jd9XlG+VV7hqaL2eUVN24IyghnBjGDD+Xk6EJ4qKrfCX3iqqNwKyghmBDOC/QA+8EMGrBGgoAAAAABJRU5ErkJggg==",
      "threadhash": "bafyreifmgq26qjh3tf2kbbxnyhn25j7txf2z3t5rdddginubswdroddqci",
      "wallets": "eip155:0x5a00469f73DaC7c4F6Caa501fEBd1b8F8F559914",
      "combinedDID": "eip155:0x5a00469f73DaC7c4F6Caa501fEBd1b8F8F559914_eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
      "name": null,
      "groupInformation": null,
      "msg": {
          "fromCAIP10": "eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
          "toCAIP10": "eip155:0x5a00469f73DaC7c4F6Caa501fEBd1b8F8F559914",
          "fromDID": "eip155:0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD",
          "toDID": "eip155:0x5a00469f73DaC7c4F6Caa501fEBd1b8F8F559914",
          "messageContent": "ill help you!",
          "messageType": "Text",
          "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJklG2uCZCv/3otNN/wYRYhBDAa/mHkxRm4Emn6H6//ei00\n3/BhAAAhkQf/UPj9HUV25S+8NUCfgiuAGzEXcKKnUlDAPCVMsWOBNFn/khlH\nuaoZH/vheZ25d5wwFa0WwXdgfG/BFCRXaJc3UDgoJ3Z9fss/a55Q96BWc6wq\nQDlCTKFE/MY6T+KK7uvW1nhMuCBlfMdOGCnCkHStEKnU+qnriyp8P2scJUbg\nwpXpQRTQh3mXdunPBrOlfMRbLu9aF/qzwUJkWkAQSop8R4HoyG0WNzAvjbpb\nQ/Ky4SrdejMRA8ev2vttJv1aGhzxDePOm/JenHXFfF7Sqm+3bE8MiaAxK35N\nON3prdEBm6tN7B/uGdFmiQU3HQ0BZaqZ9Fh/geviKjRsWkgQMZ7Ajw==\n=3fNJ\n-----END PGP SIGNATURE-----\n",
          "timestamp": 1687449006788,
          "sigType": "pgp",
          "encType": "pgp",
          "encryptedSecret": "-----BEGIN PGP MESSAGE-----\n\nwcBMAwutUNC4huZlAQf7BiXtYP+ZQXuAGdS70srrwIHI6GVD8JTmBXHPtoik\nZ3g401Y4QLiqZY0TpLebKuaIp+4eHdwk88LCwVI1k+uRFudUGiGymDLpcviW\nUDIFqVQn+P+Nduc3cdSUW8Fz4Wx2sTWGG3ACJJg+SBVvoPZl8maFz56Cjq+6\ntoJlNJrffDEAcCgpWMyGZZKnQHOr2lt7PovnnH2fEEqcwMIjhGdUUF50k+xv\nFTPxZC7Symlh8o8Smi6hPY+nwXN+gSm5P8xe2DSaW/ghLSJiLpNJftMYQN0n\nAIrjdmkpSsKuHFlrtg8VptiXV/BhGHb7J60jFAqtV0qnr0Ja2ydhPMHX2KoZ\nk8HATANIV9yk5fJU0wEH/31BvvNKU6ocWRTRzhuAQsD1z8JPKei1/rmYjy9m\n6Zd4JmBWQQ872PCHscnZQa0R0R4ai3UvoPvjHznHoZCDn0PSrYWrABkadUWz\n7OqfyJcBTNm2x4rOh5tOsE8a/fF2q67kWQBB1+DGg/nI1EEczNccm9UZqd64\nyuqhbX1Iw7GezDHsU1waKUt+tR7u36pMu2gA0crY/AZdWXjhjLUIBNrfRs0l\nXqBtFm1CyX8wnggFFQv2j4qYhuVaXUcDofcgC5ovSW5Jz3e5JDVknd7tAXlY\nYoo1nkqPIuReNhXRGfu+1v/NjZoSEgqQbDKd5quMK95a503e7LJKgcbnHwL6\nCpbSQAEOckesseX5BQgRfXzw41iVsQXJW33YF5mw2P3Spit/FfFrOqbqZON+\nTlaLwACxZ63HaM8Ey3IQjveSiBO7Z0w=\n=rXqO\n-----END PGP MESSAGE-----\n",
          "link": "bafyreieyoc2dfzuef5fbdoffsqkfse5mtia2lryklrpordqthbunnnvzgm"
      }
  }
]
const handleChatItemClick = (clickedChat:any) => {
  action('Chat Item Clicked')(clickedChat);
};

const customStyles = {
  containerStyle: {},
  chatItemStyle: {},
  profilePictureStyle:{},
  chatNameStyle: {},
  chatTimestampStyle:{},
  chatMessageStyle: {}
};

export const LightMode: Story = {
  args: {
    chats: data as any,
    onChatItemClick:handleChatItemClick 

  },
};
export const DarkMode: Story = {
  args: {
    chats: data as any,
   dark: true,
   ...customStyles,
   onChatItemClick: handleChatItemClick  },
};

