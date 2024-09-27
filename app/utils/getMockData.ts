import { InfectionsSearchResponseDto } from '../Api';
import { getRandomNumber } from './getRandomNumber';

const mockData = [
  {   
    "id": "01e22f7055a04442c721e62db2b0c433",
    "log_checksum": "01e22f7055a04442c721e62db2b0c433",
    "log_file_name": "RO[382E4CCF014D07FC4749309DE03A5953] [2024-09-20T19_38_52.5292312+03_00]",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "Premium logs - @fatetraffic | support - @ggfate",
      "infection_date": "2024-09-20T16:38:52Z",
      "ip": "92.87.205.119",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "Myria",
      "country": "RO",
      "os": "Windows 10 Pro x64",
      "hwid": "382E4CCF014D07FC4749309DE03A5953"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/register/",
        "creds": [
          {
            "username": "stef_39",
            "password": "st321eam"
          }
        ]
      }
    ]
  },
  {
    "id": "185759d3f09cb2391f2ee2e8059ab3a8",
    "log_checksum": "185759d3f09cb2391f2ee2e8059ab3a8",
    "log_file_name": "@NEW_DAISYCLOUD BEST CLOUD MNQRDATAUB2SY4T8VY2XFG5XVZS9NPXGH_2024_09_20T16_56_22_390972",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "https://t.me/+uuz8-qLUNeU2ZmI0",
      "infection_date": "2024-09-20T15:37:28Z",
      "ip": "66.181.187.240",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\6twHMRLYmz.exe",
      "username": "perfe",
      "country": "MN",
      "os": "Windows 10 Pro x64",
      "hwid": "84C98DCCCB3AE7CCE2B00E2CC0328FB3"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/register/",
        "creds": [
          {
            "username": "j7.kayozz@gmail.com",
            "password": "xg2@hwM<nsTt35w"
          }
        ]
      }
    ]
  },
  {
    "id": "b00057e6941de9c0a6502d67f9c271d3",
    "log_checksum": "b00057e6941de9c0a6502d67f9c271d3",
    "log_file_name": "@NEW_DAISYCLOUDKE885D97PKMYF0AMLPH4R09UWYFO5WHMB_2024_09_21T18_18_65_120347",
    "stealer_type": "Vidar",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T14:12:50Z",
      "ip": "102.210.100.10",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "SENSELESS",
      "country": null,
      "os": "Windows 11",
      "hwid": "755D9B71D74046559DB973998BC84545"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/user/yourmaiden/",
        "creds": [
          {
            "username": "ManagerMuch4177",
            "password": "saxvuw-9kuDba-syvcuj"
          }
        ]
      }
    ]
  },
  {
    "id": "03c8f7cfc7fe7f2e540580b40be55909",
    "log_checksum": "03c8f7cfc7fe7f2e540580b40be55909",
    "log_file_name": "@NEW_DAISYCLOUDTRML2D6ORR5II1DGVLM7ERNIXPZ1SHG4W_2024_09_21T19_79_04_572097",
    "stealer_type": "Vidar",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T14:05:10Z",
      "ip": "176.40.241.245",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "user",
      "country": null,
      "os": "Windows 10 Pro",
      "hwid": "BA6DDCD397544394A9361E0B8EE8DF64"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/settings/account",
        "creds": [
          {
            "username": "azboyh",
            "password": "d.Ankara34"
          }
        ]
      },
      {
        "url": "https://www.reddit.com/login/",
        "creds": [
          {
            "username": "azbou",
            "password": "d.Ankara34"
          }
        ]
      }
    ]
  },
  {
    "id": "11c8dec9eb01816ddaca41f6606f6f9d",
    "log_checksum": "11c8dec9eb01816ddaca41f6606f6f9d",
    "log_file_name": "@NEW_DAISYCLOUD BEST CLOUD USYVC4TPRJR5FJJ47O7KOC7JHEBE8PAO8_2024_09_21T12_11_67_469739",
    "stealer_type": "Stealc",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T13:45:02Z",
      "ip": "162.84.191.29",
      "malware_path": "C:\\Users\\pazer\\OneDrive\\Documents\\iofolko5\\noVjbj1hEvgxQwmXwyqe4osq.exe",
      "username": "pazer",
      "country": "US",
      "os": "Windows 11",
      "hwid": "952EF43B9A381806970752"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/r/UsenetInvites/comments/573lgw/o_10x_nzbsu_5x_nzbcat_simplynzbs/",
        "creds": [
          {
            "username": "pazereckas41",
            "password": "megamillions40"
          }
        ]
      }
    ]
  },
  {
    "id": "59a8bf93bf81df2aa3b82d8d182a7aa0",
    "log_checksum": "59a8bf93bf81df2aa3b82d8d182a7aa0",
    "log_file_name": "VN[C8CD74BF037BF7881EF0CC0FD93C665F] [2024-09-20T16_18_45.6137291+03_00]",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "logs cloud fate (support - @ggfate)",
      "infection_date": "2024-09-20T13:18:45Z",
      "ip": "113.176.201.13",
      "malware_path": "C:\\Users\\Administrator\\AppData\\Roaming\\zOJnOX2kKs.exe",
      "username": "Administrator",
      "country": "VN",
      "os": "Windows 10 Pro x64",
      "hwid": "C8CD74BF037BF7881EF0CC0FD93C665F"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/login/",
        "creds": [
          {
            "username": "aviationguylegendary747@gmail.com",
            "password": "proof2024"
          }
        ]
      }
    ]
  },
  {
    "id": "323e0e9d2a3aa897bad7c4d22dc7792a",
    "log_checksum": "323e0e9d2a3aa897bad7c4d22dc7792a",
    "log_file_name": "MY[767B5B2C12A5F5505F997C34EA6FC171] [2024-09-20T16_11_34.4576506+03_00]",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "Premium logs - @fatetraffic | support - @ggfate",
      "infection_date": "2024-09-20T13:11:34Z",
      "ip": "175.140.134.238",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "Gabriel8020",
      "country": "MY",
      "os": "Windows 10 Pro x64",
      "hwid": "767B5B2C12A5F5505F997C34EA6FC171"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/",
        "creds": [
          {
            "username": "Irithyll80",
            "password": "4531185abc"
          },
          {
            "username": "Redmsn06s",
            "password": "4531185Abc"
          }
        ]
      }
    ]
  },
  {
    "id": "32e2c9f0cf8b18280ef1ac55f6126f90",
    "log_checksum": "32e2c9f0cf8b18280ef1ac55f6126f90",
    "log_file_name": "@NEW_DAISYCLOUDEGR01VEDE3ESGF7WI32KZOCR3U407YO0J_2024_09_21T16_25_60_179833",
    "stealer_type": "Vidar",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T12:49:15Z",
      "ip": "156.204.56.84",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "Lenovo",
      "country": null,
      "os": "Windows 11",
      "hwid": "56AFD5F89633464CB8297B73D342E765"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/passwordrecovery/",
        "creds": [
          {
            "username": "20112m",
            "password": "zamadagamed"
          }
        ]
      },
      {
        "url": "https://www.reddit.com/login/",
        "creds": [
          {
            "username": "2011m",
            "password": "zamadagamed"
          }
        ]
      },
      {
        "url": "https://www.reddit.com/r/booksuggestions/comments/rwja7h/whats_a_real_good_self_help_book_for_depression/",
        "creds": [
          {
            "username": "1mehab29@gmail.com",
            "password": "zamadagamed"
          }
        ]
      },
      {
        "url": "https://www.reddit.com/register/",
        "creds": [
          {
            "username": "2011m",
            "password": "zamadagamed"
          }
        ]
      }
    ]
  },
  {
    "id": "4e6edfd8d2351ed365112312bd23ff7c",
    "log_checksum": "4e6edfd8d2351ed365112312bd23ff7c",
    "log_file_name": "BG[56B017232EC51E78C28303F33DB25968] [2024-09-20T15_44_10.8562745+03_00]",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "Premium logs - @fatetraffic | support - @ggfate",
      "infection_date": "2024-09-20T12:44:10Z",
      "ip": "77.70.100.242",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "User",
      "country": "BG",
      "os": "Windows 10 Pro x64",
      "hwid": "56B017232EC51E78C28303F33DB25968"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/register/",
        "creds": [
          {
            "username": "memesolidier",
            "password": "ILD132132"
          }
        ]
      }
    ]
  },
  {
    "id": "0e7aed60fa0b9defb0a20e76b72c7139",
    "log_checksum": "0e7aed60fa0b9defb0a20e76b72c7139",
    "log_file_name": "@NEW_DAISYCLOUDKEE53L9XZI3KTZVW6PQ57JO0VTI6I2Z84_2024_09_21T17_19_49_213188",
    "stealer_type": "Vidar",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T12:15:11Z",
      "ip": "154.159.252.147",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "Alex",
      "country": null,
      "os": "Windows 10 Pro",
      "hwid": "3F0C52892F5C4526AAFD2268F81BA661"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/account/register/",
        "creds": [
          {
            "username": "adventurer011",
            "password": "evergamer007"
          }
        ]
      }
    ]
  },
  {
    "id": "7fa47c10cd16ee8f4592cd59c17e8e03",
    "log_checksum": "7fa47c10cd16ee8f4592cd59c17e8e03",
    "log_file_name": "@NEW_DAISYCLOUDCO0Z4K6X2UCCNNQLZ7I1PKCF0GPUFO7PC_2024_09_21T18_82_15_222782",
    "stealer_type": "Vidar",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T11:45:24Z",
      "ip": "181.55.22.76",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "pc",
      "country": null,
      "os": "Windows 10 Pro",
      "hwid": "EC1E93B8CCC5451FBEB357066C79FC13"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/login/",
        "creds": [
          {
            "username": "Raxon935",
            "password": "mipanamiguel935"
          }
        ]
      }
    ]
  },
  {
    "id": "2778f7e1818091eaebc0afbe0ce6a8bb",
    "log_checksum": "2778f7e1818091eaebc0afbe0ce6a8bb",
    "log_file_name": "@NEW_DAISYCLOUD BEST CLOUD VESQJKRFO76SRL5OVYAOETMYQRE8E78CM_2024_09_21T15_41_53_528520",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "https://t.me/+uuz8-qLUNeU2ZmI0",
      "infection_date": "2024-09-20T11:38:13Z",
      "ip": "38.51.120.27",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\wJ9RDLv9a0.exe",
      "username": "Oficina SIA",
      "country": "VE",
      "os": "Windows 10 Enterprise x64",
      "hwid": "A031EBAB390ADEEFE68F1153E13B7EFD"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/register",
        "creds": [
          {
            "username": "VictoriaRivero",
            "password": "26058397pedro26058397pedro"
          }
        ]
      }
    ]
  },
  {
    "id": "0ee348706cfc818528636bd680e40c53",
    "log_checksum": "0ee348706cfc818528636bd680e40c53",
    "log_file_name": "@NEW_DAISYCLOUDINAEQJF7KYYUMVDIPP1PEUF72CX5TQU9K_2024_09_21T19_07_39_823742",
    "stealer_type": "Vidar",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T11:09:19Z",
      "ip": "103.198.173.191",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "surya",
      "country": null,
      "os": "Windows 11",
      "hwid": "4C61B31B326A4D58904123B137831B0C"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/register",
        "creds": [
          {
            "username": "Suryansh8653",
            "password": "iris406q"
          }
        ]
      }
    ]
  },
  {
    "id": "120df1f85bc3568eeca5d8fe539e041a",
    "log_checksum": "120df1f85bc3568eeca5d8fe539e041a",
    "log_file_name": "@NEW_DAISYCLOUD BEST CLOUD EGPHCU4XUTBS3N28DGH0UZ2526UFJH0EO_2024_09_20T10_28_82_846343",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "https://t.me/+uuz8-qLUNeU2ZmI0",
      "infection_date": "2024-09-20T10:43:47Z",
      "ip": "197.160.174.55",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\0vgZbx9Q5R.exe",
      "username": "abano",
      "country": "EG",
      "os": "Windows 10 Pro x64",
      "hwid": "E3EABD3E31671A33AAB964165F73888F"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/",
        "creds": [
          {
            "username": "Connect -Sorbet9903",
            "password": "2104484tatch19"
          }
        ]
      },
      {
        "url": "https://www.reddit.com/account/sso/unlink/",
        "creds": [
          {
            "username": "tatch",
            "password": "2104484tatch10"
          }
        ]
      }
    ]
  },
  {
    "id": "debc4882043e358e6bd60af1bf424380",
    "log_checksum": "debc4882043e358e6bd60af1bf424380",
    "log_file_name": "@NEW_DAISYCLOUD BEST CLOUD BR9XTZASWKP4V04JLNUF64TJRP3BAFD7K_2024_09_20T11_80_33_555824",
    "stealer_type": "Stealc",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T09:59:53Z",
      "ip": "138.97.139.139",
      "malware_path": "C:\\Users\\cfaud\\AppData\\Roaming\\1000043000\\f5b6901b90.exe",
      "username": "cfaud",
      "country": "BR",
      "os": "Windows 10 Home",
      "hwid": "A659892F5CB43750773564"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/login/",
        "creds": [
          {
            "username": "mael_murilo",
            "password": "Red14032003"
          }
        ]
      }
    ]
  },
  {
    "id": "d4242fa8dadf97b71df9f58c6b17828c",
    "log_checksum": "d4242fa8dadf97b71df9f58c6b17828c",
    "log_file_name": "LK[BD7D812D9266D98CBF9075AC95544D26] [2024-09-20T12_48_49. @LOGSCLOUDYT_BOT",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "@OLEH_PSP",
      "infection_date": "2024-09-20T09:48:49Z",
      "ip": "112.134.172.245",
      "malware_path": "C:\\Users\\sasir\\AppData\\Roaming\\e1BOGpcCpX.exe",
      "username": "Sasiri",
      "country": "LK",
      "os": "Windows 10 Home x64",
      "hwid": "BD7D812D9266D98CBF9075AC95544D26"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/2fa/enable/",
        "creds": [
          {
            "username": "UNKNOWN",
            "password": "acernitro5reddit20050126"
          }
        ]
      }
    ]
  },
  {
    "id": "2805881992d0e2c907e67fc619347508",
    "log_checksum": "2805881992d0e2c907e67fc619347508",
    "log_file_name": "LT[A29EF7424E7FFA784E4F89DF06E56E5A] [2024-09-20T12_39_45.1156923+03_00]",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "Premium logs - @fatetraffic | support - @ggfate",
      "infection_date": "2024-09-20T09:39:45Z",
      "ip": "78.58.62.166",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
      "username": "user",
      "country": "LT",
      "os": "Windows 10 Pro x64",
      "hwid": "A29EF7424E7FFA784E4F89DF06E56E5A"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/login",
        "creds": [
          {
            "username": "YaBoySimis",
            "password": "simpsonas733"
          }
        ]
      }
    ]
  },
  {
    "id": "578978e5fb17d63fd6eed12342933d4c",
    "log_checksum": "578978e5fb17d63fd6eed12342933d4c",
    "log_file_name": "@NEW_DAISYCLOUD BEST CLOUD GRZ32XOT3I6A7JJHE0INBZ3ZOJ0447J1B_2024_09_21T13_55_36_104386",
    "stealer_type": "RedLine",
    "computer_information": {
      "build_id": "https://t.me/+uuz8-qLUNeU2ZmI0",
      "infection_date": "2024-09-20T08:19:43Z",
      "ip": "85.74.127.40",
      "malware_path": "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\5SILvnvKl0.exe",
      "username": "User",
      "country": "GR",
      "os": "Windows 10 Enterprise x64",
      "hwid": "1EC305A23BB72BC9A66161053B1CD98C"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/register/",
        "creds": [
          {
            "username": "Giannis1111",
            "password": "john2011!"
          }
        ]
      }
    ]
  },
  {
    "id": "8e366431868130bfb87b8fec18f1fbde",
    "log_checksum": "8e366431868130bfb87b8fec18f1fbde",
    "log_file_name": "@NEW_DAISYCLOUD BEST CLOUD VNXKG6QJ9T9S6145IESPHT0ADMT8PIF9X_2024_09_20T17_51_60_859297",
    "stealer_type": "Stealc",
    "computer_information": {
      "build_id": null,
      "infection_date": "2024-09-20T03:33:31Z",
      "ip": "1.52.236.239",
      "malware_path": "C:\\Users\\DELL\\AppData\\Local\\Temp\\1000042001\\cb065e4eb2.exe",
      "username": "DELL",
      "country": "VN",
      "os": "Windows 10 Pro",
      "hwid": "18FF990FAB543207603164"
    },
    "credentials": [
      {
        "url": "https://www.reddit.com/login",
        "creds": [
          {
            "username": "kataroa",
            "password": "kataro12q"
          }
        ]
      }
    ]
  }
];

export function getMockData(count = 1, next: string | null = "yes"): InfectionsSearchResponseDto {
  const middleIndex = mockData.length / 2;
  const data = mockData.slice(getRandomNumber(0, middleIndex), getRandomNumber(middleIndex, mockData.length));

  return {
    search_id: count.toString(),
    credits_left: 1,
    items_count: data.length, 
    search_consumed_credits: 1,
    total_items_count: mockData.length,
    next,
    data, 
  }
}