import { IconName } from '@carlsberggroup/malty.atoms.icon';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  onValueChange: (value: string) => void;
  type: InputType;
  placeholder?: string;
  error?: string;
  icon?: IconName;
  iconPosition?: InputIconPosition;
  disabled?: boolean;
  size?: InputSize;
  clearable?: boolean;
  mask?: InputMaskTypes;
  children?: React.Component;
  className?: string;
  hint?: string;
  dataTestId?: string;
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  Date = 'date',
  Search = 'search',
  Telephone = 'tel',
  URL = 'url'
}

export enum InputSize {
  Medium = 'Medium',
  Large = 'Large'
}

export enum InputIconPosition {
  Left = 'Left',
  Right = 'Right'
}

export enum InputMaskTypes {
  Telephone = 'telephone',
  CreditCard = 'credit_card'
}

export enum InputCountry {
  GB = 'United Kingdom',
  US = 'United States',
  AF = 'Afghanistan',
  AL = 'Albania',
  DZ = 'Algeria',
  AD = 'Andorra',
  AO = 'Angola',
  AI = 'Anguilla',
  AG = 'Antigua and Barbuda',
  AR = 'Argentina',
  AM = 'Armenia',
  AW = 'Aruba',
  AU = 'Australia',
  AT = 'Austria',
  AZ = 'Azerbaijan',
  BS = 'Bahamas',
  BH = 'Bahrain',
  BD = 'Bangladesh',
  BB = 'Barbados',
  BY = 'Belarus',
  BE = 'Belgium',
  BZ = 'Belize',
  BJ = 'Benin',
  BM = 'Bermuda',
  BT = 'Bhutan',
  BO = 'Bolivia',
  BA = 'Bosnia and Herzegovina',
  BW = 'Botswana',
  BR = 'Brazil',
  IO = 'British Indian Ocean Territory',
  BN = 'Brunei',
  BG = 'Bulgaria',
  BF = 'Burkina Faso',
  BI = 'Burundi',
  KH = 'Cambodia',
  CM = 'Cameroon',
  CA = 'Canada',
  CV = 'Cape Verde',
  KY = 'Cayman Islands',
  CF = 'Central African Republic',
  TD = 'Chad',
  CL = 'Chile',
  CN = 'China',
  CO = 'Colombia',
  KM = 'Comoros',
  CG = 'Congo',
  CD = 'Congo Democratic Republic',
  CK = 'Cook Islands',
  CR = 'Costa Rica',
  CI = 'Cote Divoire',
  HR = 'Croatia',
  CU = 'Cuba',
  CW = 'Curaçao',
  CY = 'Cyprus',
  CZ = 'CzechRepublic',
  DK = 'Denmark',
  DJ = 'Djibouti',
  DM = 'Dominica',
  DO = 'Dominican Republic',
  EC = 'Ecuador',
  EG = 'Egypt',
  SV = 'El Salvador',
  GQ = 'Equatorial Guinea',
  ER = 'Eritrea',
  EE = 'Estonia',
  ET = 'Ethiopia',
  FK = 'Falkland Islands',
  FO = 'Faroe Islands',
  FJ = 'Fiji',
  FI = 'Finland',
  FR = 'France',
  GF = 'French Guiana',
  PF = 'French Polynesia',
  GA = 'Gabon',
  GM = 'Gambia',
  GE = 'Georgia',
  DE = 'Germany',
  GH = 'Ghana',
  GI = 'Gibraltar',
  GR = 'Greece',
  GL = 'Greenland',
  GD = 'Grenada',
  GP = 'Guadeloupe',
  GU = 'Guam',
  GT = 'Guatemala',
  GN = 'Guinea',
  GW = 'Guinea Bissau',
  GY = 'Guyana',
  HT = 'Haiti',
  VA = 'Vatican City',
  HN = 'Honduras',
  HK = 'HongKong',
  HU = 'Hungary',
  IS = 'Iceland',
  IN = 'India',
  ID = 'Indonesia',
  IR = 'Iran',
  IQ = 'Iraq',
  IE = 'Ireland',
  IL = 'Israel',
  IT = 'Italy',
  JM = 'Jamaica',
  JP = 'Japan',
  JO = 'Jordan',
  KZ = 'Kazakhstan',
  KE = 'Kenya',
  KI = 'Kiribati',
  KR = 'Korea, Republic of',
  KP = "Korea, Democratic People's Republic of",
  KW = 'Kuwait',
  KG = 'Kyrgyzstan',
  LA = 'Laos',
  LV = 'Latvia',
  LB = 'Lebanon',
  LS = 'Lesotho',
  LR = 'Liberia',
  LY = 'Libya',
  LI = 'Liechtenstein',
  LT = 'Lithuania',
  LU = 'Luxembourg',
  MO = 'Macao',
  MG = 'Madagascar',
  MW = 'Malawi',
  MY = 'Malaysia',
  MV = 'Maldives',
  ML = 'Mali',
  MT = 'Malta',
  MH = 'Marshall Islands',
  MQ = 'Martinique',
  MR = 'Mauritania',
  MU = 'Mauritius',
  YT = 'Mayotte',
  MX = 'Mexico',
  FM = 'Micronesia',
  MD = 'Moldova',
  MC = 'Monaco',
  MN = 'Mongolia',
  ME = 'Montenegro',
  MS = 'Montserrat',
  MA = 'Morocco',
  MZ = 'Mozambique',
  MM = 'Myanmar',
  NA = 'Namibia',
  NR = 'Nauru',
  NP = 'Nepal',
  NL = 'Netherlands',
  NC = 'New Caledonia',
  NZ = 'New Zealand',
  NI = 'Nicaragua',
  NE = 'Niger',
  NG = 'Nigeria',
  NU = 'Niue',
  NF = 'Norfolk Islands',
  NO = 'Norway',
  OM = 'Oman',
  PK = 'Pakistan',
  PW = 'Palau',
  PS = 'Palestinian Territory',
  PA = 'Panama',
  PG = 'Papua New Guinea',
  PY = 'Paraguay',
  PE = 'Peru',
  PH = 'Philippines',
  PN = 'Pitcairn',
  PL = 'Poland',
  PT = 'Portugal',
  PR = 'Puerto Rico',
  QA = 'Qatar',
  RE = 'Reunion',
  MKD = 'Macedonia',
  RO = 'Romania',
  RW = 'Rwanda',
  SH = 'Saint Helena',
  LC = 'Saint Lucia',
  MF = 'Saint Martin',
  PM = 'Saint Pierre And Miquelon',
  WS = 'Samoa',
  SM = 'San Marino',
  ST = 'Sao Tome And Principe',
  SA = 'Saudi Arabia',
  SN = 'Senegal',
  RS = 'Serbia',
  SC = 'Seychelles',
  SL = 'Sierra Leone',
  SG = 'Singapore',
  SK = 'Slovakia',
  SI = 'Slovenia',
  SB = 'Solomon Islands',
  SO = 'Somalia',
  ZA = 'South Africa',
  ES = 'Spain',
  LK = 'Sri Lanka',
  SD = 'Sudan',
  SS = 'South Sudan',
  SR = 'Suriname',
  SJ = 'Svalbard And Jan Mayen',
  SZ = 'Swaziland',
  SE = 'Sweden',
  CH = 'Switzerland',
  SX = 'Sint Maarten (Dutch part)',
  SY = 'Syria',
  TW = 'Taiwan',
  TJ = 'Tajikistan',
  TZ = 'Tanzania',
  TH = 'Thailand',
  TL = 'Timor Leste',
  TG = 'Togo',
  TK = 'Tokelau',
  TO = 'Tonga',
  TT = 'Trinidad And Tobago',
  TN = 'Tunisia',
  TR = 'Turkey',
  TM = 'Turkmenistan',
  TV = 'Tuvalu',
  UG = 'Uganda',
  UA = 'Ukraine',
  AE = 'United Arab Emirates',
  UM = 'United States Outlying Islands',
  UY = 'Uruguay',
  UZ = 'Uzbekistan',
  VU = 'Vanuatu',
  VE = 'Venezuela',
  VN = 'Vietnam',
  VG = 'Virgin Islands British',
  VI = 'Virgin Islands US',
  WF = 'Wallis And Futuna',
  EH = 'Western Sahara',
  YE = 'Yemen',
  ZM = 'Zambia',
  ZW = 'Zimbabwe'
}

export enum InputPrefixes {
  'United Kingdom' = 44,
  'United States' = 1,
  'Algeria' = 213,
  'Andorra' = 376,
  'Angola' = 244,
  'Anguilla' = 1264,
  'Afghanistan' = 93,
  'Albania' = 355,
  'Antigua and Barbuda' = 1268,
  'Argentina' = 54,
  'Armenia' = 374,
  'Aruba' = 297,
  'Australia' = 61,
  'Austria' = 43,
  'Azerbaijan' = 994,
  'Bahamas' = 1242,
  'Bahrain' = 973,
  'Bangladesh' = 880,
  'Barbados' = 1246,
  'Belarus' = 375,
  'Belgium' = 32,
  'Belize' = 501,
  'Benin' = 229,
  'Bermuda' = 1441,
  'Bhutan' = 975,
  'Bolivia' = 591,
  'British Indian Ocean Territory' = 246,
  'Bosnia and Herzegovina' = 387,
  'Botswana' = 267,
  'Brazil' = 55,
  'Brunei' = 673,
  'Bulgaria' = 359,
  'Burkina Faso' = 226,
  'Burundi' = 257,
  'Cambodia' = 855,
  'Cameroon' = 237,
  'Canada' = 1,
  'Cape Verde' = 238,
  'Cayman Islands' = 1345,
  'Central African Republic' = 236,
  'Cote Divoire' = 225,
  'Chile' = 56,
  'China' = 86,
  'Colombia' = 57,
  'Comoros' = 269,
  'Congo' = 242,
  'Cook Islands' = 682,
  'Costa Rica' = 506,
  'Congo Democratic Republic' = 243,
  'Croatia' = 385,
  'Cuba' = 53,
  'Cyprus' = 357,
  'CzechRepublic' = 42,
  'Curaçao' = 599,
  'Chad' = 235,
  'Denmark' = 45,
  'Djibouti' = 253,
  'Dominica' = 1809,
  'Dominican Republic' = 1809,
  'Ecuador' = 593,
  'Egypt' = 20,
  'El Salvador' = 503,
  'Equatorial Guinea' = 240,
  'Eritrea' = 291,
  'Estonia' = 372,
  'Ethiopia' = 251,
  'Falkland Islands' = 500,
  'Faroe Islands' = 298,
  'Fiji' = 679,
  'Finland' = 358,
  'France' = 33,
  'French Guiana' = 594,
  'French Polynesia' = 689,
  'Gabon' = 241,
  'Gambia' = 220,
  'Georgia' = 7880,
  'Germany' = 49,
  'Ghana' = 233,
  'Gibraltar' = 350,
  'Greece' = 30,
  'Greenland' = 299,
  'Grenada' = 1473,
  'Guadeloupe' = 590,
  'Guam' = 671,
  'Guatemala' = 502,
  'Guinea' = 224,
  'Guinea Bissau' = 245,
  'Guyana' = 592,
  'Haiti' = 509,
  'Honduras' = 504,
  'HongKong' = 852,
  'Hungary' = 36,
  'Iceland' = 354,
  'India' = 91,
  'Indonesia' = 62,
  'Iran' = 98,
  'Iraq' = 964,
  'Ireland' = 353,
  'Israel' = 972,
  'Italy' = 39,
  'Jamaica' = 1876,
  'Japan' = 81,
  'Jordan' = 962,
  'Kazakhstan' = 7,
  'Kenya' = 254,
  'Kiribati' = 686,
  "Korea, Democratic People's Republic of" = 850,
  'Korea, Republic of' = 82,
  'Kuwait' = 965,
  'Kyrgyzstan' = 996,
  'Laos' = 856,
  'Latvia' = 371,
  'Lebanon' = 961,
  'Lesotho' = 266,
  'Liberia' = 231,
  'Libya' = 218,
  'Liechtenstein' = 417,
  'Lithuania' = 370,
  'Luxembourg' = 352,
  'Macao' = 853,
  'Macedonia' = 389,
  'Madagascar' = 261,
  'Malawi' = 265,
  'Malaysia' = 60,
  'Maldives' = 960,
  'Mali' = 223,
  'Malta' = 356,
  'Marshall Islands' = 692,
  'Martinique' = 596,
  'Mauritania' = 222,
  'Mauritius' = 230,
  'Mayotte' = 269,
  'Mexico' = 52,
  'Micronesia' = 691,
  'Moldova' = 373,
  'Monaco' = 377,
  'Mongolia' = 976,
  'Montserrat' = 1664,
  'Morocco' = 212,
  'Mozambique' = 258,
  'Myanmar' = 95,
  'Montenegro' = 382,
  'Namibia' = 264,
  'Nauru' = 674,
  'Nepal' = 977,
  'Netherlands' = 31,
  'New Caledonia' = 687,
  'New Zealand' = 64,
  'Nicaragua' = 505,
  'Niger' = 227,
  'Nigeria' = 234,
  'Niue' = 683,
  'Norfolk Islands' = 672,
  'Northern Marianas' = 670,
  'Norway' = 47,
  'Oman' = 968,
  'Palau' = 680,
  'Panama' = 507,
  'Papua New Guinea' = 675,
  'Pakistan' = 92,
  'Paraguay' = 595,
  'Peru' = 51,
  'Philippines' = 63,
  'Poland' = 48,
  'Portugal' = 351,
  'Puerto Rico' = 1787,
  'Palestinian Territory' = 970,
  'Pitcairn' = 64,
  'Qatar' = 974,
  'Reunion' = 262,
  'Romania' = 40,
  'Russia' = 7,
  'Rwanda' = 250,
  'San Marino' = 378,
  'Sao Tome And Principe' = 239,
  'Saudi Arabia' = 966,
  'Senegal' = 221,
  'Serbia' = 381,
  'Seychelles' = 248,
  'Sierra Leone' = 232,
  'Sint Maarten (Dutch part)' = 599,
  'Singapore' = 65,
  'Slovakia' = 421,
  'Slovenia' = 386,
  'Solomon Islands' = 677,
  'South Sudan' = 211,
  'Somalia' = 252,
  'Samoa' = 685,
  'South Africa' = 27,
  'Spain' = 34,
  'Sri Lanka' = 94,
  'Saint Helena' = 290,
  'Saint Kitts and Nevis' = 1869,
  'Saint Lucia' = 1758,
  'Saint Martin' = 590,
  'Saint Pierre And Miquelon' = 508,
  'Svalbard And Jan Mayen' = 47,
  'Sudan' = 249,
  'Suriname' = 597,
  'Swaziland' = 268,
  'Sweden' = 46,
  'Switzerland' = 41,
  'Syria' = 963,
  'Taiwan' = 886,
  'Tajikistan' = 992,
  'Tanzania' = 255,
  'Thailand' = 66,
  'Togo' = 228,
  'Tonga' = 676,
  'Trinidad And Tobago' = 868,
  'Tunisia' = 216,
  'Turkey' = 90,
  'Turkmenistan' = 993,
  'Turks and Caicos Islands' = 1649,
  'Timor Leste' = 670,
  'Tokelau' = 690,
  'Tuvalu' = 688,
  'Uganda' = 256,
  'Ukraine' = 380,
  'United Arab Emirates' = 971,
  'Uruguay' = 598,
  'Uzbekistan' = 7,
  'Vanuatu' = 678,
  'Vatican City' = 379,
  'Venezuela' = 58,
  'Vietnam' = 84,
  'Virgin Islands British' = 1284,
  'Virgin Islands US' = 1340,
  'Wallis And Futuna' = 681,
  'United States Outlying Islands' = 246,
  'Western Sahara' = 212,
  'Yemen' = 967,
  'Zambia' = 260,
  'Zimbabwe' = 263
}
