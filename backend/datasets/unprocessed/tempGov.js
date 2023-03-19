const tempGov = [
  {
    name: "25 Toa Payoh Lorong 8",
    weekday: {
      rate1: "Daily: $1.30 / 30 Mins",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "45 Burghley Drive",
    weekday: {
      rate1: "$0.018 /min",
      rate2: "$0.018 /min",
    },
    saturday: {
      rate: "$0.018 /min",
    },
    sunPH: {
      rate: "$0.018 /min",
    },
  },
  {
    name: "Ang Mo Kio Hub",
    weekday: {
      rate1: "Mon-Fri: $1.20 for 1st hr; $0.60 for sub. ½ hr or part thereof.",
      rate2: "-",
    },
    saturday: {
      rate: "Sat, Sun / Ph: $1.30 for 1st hr; $0.65 for sub. ½ hr or part thereof.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Balestier Plaza",
    weekday: {
      rate1: "Daily: $1.12 per hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Balestier Point",
    weekday: {
      rate1: "8am-10pm: $1.20 per hr",
      rate2: "Aft 10pm: $2 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2 per entry",
    },
  },
  {
    name: "Bras Basah Complex",
    weekday: {
      rate1: "7am-5pm: $1 for ½ hr",
      rate2: "5pm-1am: $0.50 for ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-1am: $0.50 for ½ hr",
    },
  },
  {
    name: "Causeway Point",
    weekday: {
      rate1:
        "7am-10.30pm: $1.20 for 1st hr or part thereof; $0.60 for sub.½ hr or part thereof.",
      rate2:
        "7am-10.30pm: $1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof.",
    },
    saturday: {
      rate: "7am-12 midnight: $1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Central Place",
    weekday: {
      rate1: "$1.80 for 1st hr; $0.85 for ½ hr",
      rate2: "$1.80 for 1st hr; $0.85 for ½ hr",
    },
    saturday: {
      rate: "$1.80 for 1st hr; $0.85 for ½ hr",
    },
    sunPH: {
      rate: "$2.50 per entry",
    },
  },
  {
    name: "City Square Mall",
    weekday: {
      rate1:
        "7am-6pm: $1.20 for 1st hr; $0.60 for sub. 30 mins or part thereof.",
      rate2: "6pm-3.30am: $3 per entry.",
    },
    saturday: {
      rate: "7am-6pm: $1.40 for 1st hr; $0.70 for sub. 30 mins; 6pm-3.30am: $3.50 per entry.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Compass Point",
    weekday: {
      rate1:
        "Daily(7am-11pm): $1.20 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Goldhill Plaza",
    weekday: {
      rate1: "7am-5.30pm: $1.60 for 1st hr; $1 for sub. ½ hr",
      rate2: "5.30pm-12am: $2 per entry",
    },
    saturday: {
      rate: "7am-5.30pm: $1 per hr; Aft 5.30pm: $2 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Heartland Mall",
    weekday: {
      rate1: "7am-10.30pm: $1 per hr",
      rate2: "Aft 10.30pm: $2 per hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Hindoo Road Off-Street",
    weekday: {
      rate1: "Daily: 0700-0700: $0.50 / 30 mins (Per Minute Charging)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Hougang Green Shopping Mall",
    weekday: {
      rate1: "7am-5pm: $1.07 for 1st hr; $0.55 for sub. ½ hr",
      rate2: "Aft 5pm: $1.20 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-12am: $2.15 per entry; Aft 12am: $1.20 per entry",
    },
  },
  {
    name: "Hougang Mall",
    weekday: {
      rate1:
        "1st hr: $1.20;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr",
      rate2:
        "1st hr: $1.20;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr",
    },
    saturday: {
      rate: "1st hr: $1.30;  2nd hr: $0.70 per ½ hr; 3rd hr onwards: $1 per ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Hougang Plaza",
    weekday: {
      rate1: "5am-5pm: $0.40 for ½ hr",
      rate2: "Aft 5pm: $1.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$1.50 per entry",
    },
  },
  {
    name: "Toa Payoh HDB Hub",
    weekday: {
      rate1: "7am-6pm: $0.50 per ½ hr",
      rate2: "6pm-1am: $1 per entry; Aft 10.30pm: $2 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-1am: $1 per entry; Aft 10.30pm: $2 per entry",
    },
  },
  {
    name: "Junction 8 Shopping Centre",
    weekday: {
      rate1: "12am-5.59pm - $1.07 for 1st hr; $0.32 for sub. 15 mins",
      rate2:
        "Mon-Thu: 6pm-11.59pm: $2.14 per entry; Fri/Eve of PH: 6pm-2.59am: $2.14 per entry",
    },
    saturday: {
      rate: "3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15 mins; 6pm-2.59am: $2.14 per entry",
    },
    sunPH: {
      rate: "3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15 mins; 6pm-11.59pm: $2.14 per entry",
    },
  },
  {
    name: "Kampong Bugis Off-Street",
    weekday: {
      rate1: "Daily: 0700-0700: $0.50 /30 mins (Per Minute Charging)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Kampong Kapor Road Off-Street",
    weekday: {
      rate1: "Daily: 0700-0700: $0.50 /30 mins (Per Minute Charging)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Mustafa Centre",
    weekday: {
      rate1: "Daily: 1st hr: Free; $2 for sub. hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Nex Mall",
    weekday: {
      rate1: "Mon-Fri: $1.30 for 1st hr; $0.65 for sub. ½ hr",
      rate2: "-",
    },
    saturday: {
      rate: "Sat, Sun / Ph: $1.40 for 1st hr; $0.70 for sub. ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Northpoint Shopping Centre",
    weekday: {
      rate1:
        "Daily: $1.20 for 1st hr or part thereof; $0.80 for sub. ½ hr or part thereof.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Parliament House",
    weekday: {
      rate1: "8.01am-6pm: $1.13 per ½ hr (per min basis)",
      rate2: "6.01pm-8am: $2.06 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.06 per entry",
    },
  },
  {
    name: "Ramada Hotel",
    weekday: {
      rate1: "6am-6pm: $1.60 per hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Rivervale Mall",
    weekday: {
      rate1: "Daily: $1.28 for 1st hr, $0.64 for sub. 30 mins or part thereof.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Sembawang Shopping Centre",
    weekday: {
      rate1: "12am-11.59pm: $1.20 for 1st hr; $0.32 for sub. 15 mins",
      rate2: "$1.20 for 1st hr; $0.30 for sub. 15 mins",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Shaw Plaza",
    weekday: {
      rate1: "8am-5pm: $1.04 for 1st hr; $0.53 for sub. ½ hr",
      rate2: "Aft 5pm: $1.55 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Shrewsbury Road Off-Street",
    weekday: {
      rate1: "Daily, 0700-0700: $0.50 /30 mins (Per Minute Charging)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Square 2",
    weekday: {
      rate1: "7am-6pm: $1.60 for 1st hr; $0.80 for sub. ½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.20 for 1st 4hrs; $1.10 for sub. ½ hr; Aft 6pm: $2.20 per entry",
    },
  },
  {
    name: "Sun Plaza",
    weekday: {
      rate1: "7am-5pm: $1.20 for 1st hr; $0.65 for sub. ½ hr",
      rate2: "5pm-11pm: $2.20 per entry; Aft 11pm: $3.30 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "The Verge",
    weekday: {
      rate1: "7am-5pm: $1.60 per hr",
      rate2: "5pm-12am: $2.50 per entry; Aft 12am: $1.30 per hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-12am: $2.50 per entry; Aft 12am: $2 per hr",
    },
  },
  {
    name: "Thomson Plaza",
    weekday: {
      rate1: "7am-12am: $1 for 1st hr; $0.60 for sub. ½ hr",
      rate2: "7am-12am: $1 for 1st hr; $0.60 for sub. ½ hr",
    },
    saturday: {
      rate: "7am-11am & 4pm-12am: $1.20 for 1st hr; $0.70 for sub. ½ hr; 11am-4pm: $1.20 for 1st hr; $1 for sub. ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Merchant Square",
    weekday: {
      rate1: "8am-6pm: $2 for 1st ½ hr; $1 for sub. hr",
      rate2: "Aft 6pm: $3 per entry",
    },
    saturday: {
      rate: "$3 per entry",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "United Square Shopping Mall",
    weekday: {
      rate1: "7pm-6pm: $2.20 for 1st hr; $1.10 for sub. hr",
      rate2: "Aft 6pm: $2 per entry",
    },
    saturday: {
      rate: "7am-6pm: $2.20 for 1st 2hrs; $1.10 for sub. hr; Aft 6pm: $2 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Velocity @ Novena Square",
    weekday: {
      rate1: "6am-6pm: $1.60 for 1st hr; $0.80 for sub. ½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Yishun YS-ONE",
    weekday: {
      rate1: "0700-2230: $0.0167 /min",
      rate2: "2230-0700: $0.0167 /min ;(Capped at $4.00)",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "0700-2230: Free Parking, 2230-0700: $0.0167/min (Capped at $4.00)",
    },
  },
  {
    name: "112 Katong",
    weekday: {
      rate1:
        "6am-9.59am: $0.54 for 1st hr; $0.16 for sub. 15mins. 10am-5.59pm: $1.07 for 1st hr; $0.27 for sub. 15mins.",
      rate2:
        "6pm-8.59pm:$1.28 for 1st 30mins; $0.65 for sub. 15mins. 9pm-5.59am: $0.54 for 1st hr; $0.16 for sub. 15mins.",
    },
    saturday: {
      rate: "6am-9.59am: $0.54 for 1st hr; $0.16 for sub. 15mins. 10am-8.59pm: $1.28 for 1st 30mins; $0.65 for sub. 15mins. 9pm-5.59am: $0.54 for 1st hr; $0.16 for sub. 15mins.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Bedok Mall",
    weekday: {
      rate1: "Daily: 12-11.59pm: $1.50 for 1st hr, $0.40 for sub. 15 mins",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Bedok Point",
    weekday: {
      rate1:
        "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof.",
      rate2:
        "$1.20 for 1st hr or part thereof; $0.70 for sub ½ hr or part thereof.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Century Square",
    weekday: {
      rate1:
        "3.01am-6pm: S$1.07 for 1st hr and S$0.32 every 15 mins or part thereof.",
      rate2: "6.01am-3am: $2.14 per entry",
    },
    saturday: {
      rate: "3.01am-6pm:S$0.32 every 15 mins or part thereof; 6.01am-3am:$2.14 per entry.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Changi Airport - South Car Park (between T2 and JetQuay)",
    weekday: {
      rate1:
        "$0.035 per min. Capped at $35 per 24hrs. (Limited parking spaces and on a first-come, first-served basis)",
      rate2: "$0.035 per min. Capped at $35 per 24hrs.",
    },
    saturday: {
      rate: "$0.035 per min. Capped at $35 per 24hrs.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Changi Airport - T1, T2, T3",
    weekday: {
      rate1:
        "$0.04 per min      *Based on the per-minute rate of S$0.04, 24 hours of parking will be S$57.60.",
      rate2: "$0.04 per min",
    },
    saturday: {
      rate: "$0.04 per min",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Changi City Point",
    weekday: {
      rate1: "7.01am-6pm: $0.70 per ½ hr or part thereof.",
      rate2: "6.01pm-7am: $2.50 per entry",
    },
    saturday: {
      rate: "7.01am-5pm: $2.50 for 1st 2hrs or part thereof; $1.20 for sub. ½ hr or part thereof. 5.01pm-7am: $2.50 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Changi Village Hotel",
    weekday: {
      rate1: "8am-6pm: $2 for 1st hr; $1.50 for sub. hr",
      rate2: "Aft 6pm: $5.35 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "City Plaza",
    weekday: {
      rate1: "8am-5pm: $1.10 for 1st hr; $0.70 for sub. ½ hr",
      rate2: "5pm-12am: $1.20 per entry; Aft 12am: $2.40 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-12am: $1.20 per entry; Aft 12am: $2.40 per entry",
    },
  },
  {
    name: "D'Resort",
    weekday: {
      rate1:
        "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries).",
      rate2:
        "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $15 (Valid up to 12 midnight and not applicable for multiple entries).",
    },
    saturday: {
      rate: "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $5 per entry. Max/day: $19.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Downtown East",
    weekday: {
      rate1:
        "Mon-Thu (excluding PH, Eve of PH & School Holiday) $0.024 per min; Max/day: $12.50 (Valid up to 12 midnight and not applicable for multiple entries).",
      rate2:
        "Mon-Thu (excluding PH, Eve of PH & School Holiday) 5pm-12am: $2.40 per entry. Max/day:$12.50; Fri: $3.40 per entry.",
    },
    saturday: {
      rate: "Fri-Sat (Including PH, Eve of PH & School Holiday) $0.024 per min; 5pm-12am: $3.40 per entry. Max/day: $16.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "East Coast Park E1/E2/E3 Off-Street",
    weekday: {
      rate1: "Daily: 0700-0700: $0.50 /30 Mins (Per Minute Charging)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Eastpoint Mall",
    weekday: {
      rate1:
        "Daily: $1.20 for 1st hr or part thereof, $0.30 for sub. 15 mins or part thereof.",
      rate2: "-",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Grand Mecure Roxy Hotel",
    weekday: {
      rate1: "Daily: $1.60 per hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "IKEA (Tampines)",
    weekday: {
      rate1: "Daily free: 7am-11pm",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Katong Shopping Centre",
    weekday: {
      rate1: "7am-6pm: $1 per hr",
      rate2: "Aft 6pm: $2 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2 per entry",
    },
  },
  {
    name: "Katong Village",
    weekday: {
      rate1: "8am-6pm: $2.20 per hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Lifelong Learning Institute",
    weekday: {
      rate1: "6am-5:59pm: $0.90 per ½ hr. Full Day Parking-6am-11:59pm: $16.",
      rate2: "6pm-11.59pm: $3.21 per entry; 12am-5.59am: $12 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "6am-11:59pm: $3.21 per entry; 12am-5.59am: $12 per entry",
    },
  },
  {
    name: "Paramount Hotel",
    weekday: {
      rate1: "8am-5pm: $0.60 per ½ hr",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.50 per entry",
    },
  },
  {
    name: "Parkway Parade",
    weekday: {
      rate1: "6am-6pm: $1 for 1st hr;  $0.40 for sub. ½ hr",
      rate2: "6pm-2am: $1.50 per entry; Aft 2am: $20 per entry",
    },
    saturday: {
      rate: "6am-10am: $0.50 for 1st hr; $0.40 for sub.15 mins; 10am-6pm: $1.30 for 1st hr; $0.40 for sub. 15 mins; 6pm-2am: $2.10 per entry. Aft 2am: $20 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Roxy Square",
    weekday: {
      rate1: "7am-6pm: $1.20 for 1st hr; $1.40 for sub. hr",
      rate2: "5pm-12am: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Singapore Expo",
    weekday: {
      rate1:
        "Daily: $3.20 for 1st 2hrs; $1.50 for sub. ½ hr (Maximum Daily Charge:$20)",
      rate2: "-",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Singapore Post Centre",
    weekday: {
      rate1: "7am-5pm: $1.60 for 1st hr, $1.00 for next sub  ½ hr",
      rate2:
        "5pm-12am: $3/entry. 12am-7am: $1.60 for 1st hr, $1.00 for next sub ½ hr.",
    },
    saturday: {
      rate: "7am-1pm: $1.60 for 1st hr, $1 for next sub  ½ hr. 1pm-12am: $3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr.",
    },
    sunPH: {
      rate: "7am-12am: $3 per entry; 12am-7am $1.60 for 1st hr, $1.00 for next sub ½ hr .",
    },
  },
  {
    name: "Tampines 1",
    weekday: {
      rate1: "1st hr $1.07; 2nd hr $0.55 per ½ hr; Aft 2hrs: $0.35 per 15 mins",
      rate2: "1st hr $1.07; 2nd hr $0.55 per ½ hr; Aft 2hrs: $0.35 per 15 mins",
    },
    saturday: {
      rate: "1st hr $1.28; 2nd hr $0.60 per ½ hr; Aft 2hrs: $0.45 per 15 mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Tampines Junction",
    weekday: {
      rate1: "8am-5pm: $1 for 1st hr; $0.50 for sub. ½ hr",
      rate2: "Aft 5pm: $2 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but closed after 2pm",
    },
    sunPH: {
      rate: "Closed",
    },
  },
  {
    name: "Raffles Hotel",
    weekday: {
      rate1: "12am-6pm: $3 for 1st ½ hr; $1.50 for sub. ½ hr",
      rate2: "6pm-12am: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$6 per entry",
    },
  },
  {
    name: "Tampines Mall",
    weekday: {
      rate1: "12am-5:59pm: $1.07 for 1st hr; $0.32 for sub. 15mins",
      rate2:
        "Mon-Thu: 6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am: $2.14 per entry",
    },
    saturday: {
      rate: "3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins; 6pm-2.59am: $2.14 per entry",
    },
    sunPH: {
      rate: "3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins; 6pm-11.59am: $2.14 per entry",
    },
  },
  {
    name: "Tampines Plaza (Compaq Centre)",
    weekday: {
      rate1: "8am-5pm: $1 per ½ hr",
      rate2: "Aft 5pm: $2 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2 per entry",
    },
  },
  {
    name: "Telepark",
    weekday: {
      rate1:
        "Daily: 7am-10pm: $0.70 per ½ hr (An additional surcharge of $22 per exit after 10pm)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "White Sands Shopping Centre",
    weekday: {
      rate1: "7am-7pm: $1.20 per hr for 1st 2hrs; $1.20 for sub. ½ hr",
      rate2: "Aft 7pm: $2 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Amara Hotel",
    weekday: {
      rate1: "8am-4.59pm: $2 per ½ hr",
      rate2: "5pm-7.59am (the following day) : $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Berjaya Hotel",
    weekday: {
      rate1: "8.30am-5pm: $1 per ½ hr",
      rate2: "5pm-10pm: $1 per hr; Aft 10pm: Free",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "8.30am-10pm: $1 per hr. Aft 10pm: Free",
    },
  },
  {
    name: "Carlton Hotel",
    weekday: {
      rate1: "7am-6pm: $3 for 1st hr; $1.50 for for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Changi Village Hotel",
    weekday: {
      rate1: "8am-6pm: $2 for 1st hr; $1.50 for sub. hr",
      rate2: "Aft 6pm: $5.35 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Concorde Hotel",
    weekday: {
      rate1: "7am-6pm: $2.14 for 1st hr; $1.39 for sub. ½ hr",
      rate2: "Aft 6pm: $3.75 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.75 per entry",
    },
  },
  {
    name: "Conrad Centennial Hotel",
    weekday: {
      rate1: "7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "$2.20 for 1st 2hrs; $1.10 for sub. hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Copthorne King's Hotel",
    weekday: {
      rate1: "7am-12am: $3 for 1st hr; $1.50 for sub ½ hr",
      rate2: "Aft 12am: $4 for 1st hr; $2 for sub ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Copthorne Orchid Hotel",
    weekday: {
      rate1: "8am-5pm: $1.50 for 1st hr; $1 for sub. hr, per day $20)",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Elizabeth Hotel",
    weekday: {
      rate1: "7am-5pm: $3 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $4 per entry",
    },
    saturday: {
      rate: "$4 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Four Seasons Hotel",
    weekday: {
      rate1: "6am-5pm: $6 for 1st hr; $3 for sub. ½ hr",
      rate2: "Aft 5pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Furama City Centre Singapore",
    weekday: {
      rate1: "5am-5pm: $1.40 for 1st ½ hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Furama Riverfront Singapore",
    weekday: {
      rate1: "7am-5pm: $1 per ½ hr",
      rate2: "Aft 5pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Ramada Hotel",
    weekday: {
      rate1: "6am-6pm: $1.60 per hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Regent Hotel",
    weekday: {
      rate1: "7am-6pm: $5 for 1st hr; $2.50 for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Gallery Hotel",
    weekday: {
      rate1:
        "12pm-2pm: $3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr, $0.50 for sub. ½ hr from 2.01pm to 6.00pm for Mon-Thu",
      rate2:
        "6pm-11.59pm: $3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr; $0.50 for sub. ½ hr  from 12am-11.59am for Mon-Thu",
    },
    saturday: {
      rate: "6am-11.59pm: $3 for 1st hr; $0.50 for sub. ½ hr, $3 for 1st hr; $0.50 for sub. ½ hr from 12am-1.59am for Fri-Sun/PH",
    },
    sunPH: {
      rate: "$2 for 1st hr; $0.50 for sub. ½ hr from 2.01am-6am for Fri-Sun/PH",
    },
  },
  {
    name: "Goodwood Park Hotel",
    weekday: {
      rate1: "8am-6pm: $4 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 6pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Grand Copthorne Waterfront Hotel",
    weekday: {
      rate1: "7am-5pm: $3.75 for 1st hr; $2.14 for sub. hr",
      rate2: "Aft 5pm: $4.28 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$4.28 per entry",
    },
  },
  {
    name: "Grand Hyatt Hotel",
    weekday: {
      rate1: "4am-4.59pm: $3.21 for 1st hr; $1.07 for sub. ½ hr",
      rate2: "Aft 5pm: $5.35 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "4am-3.59am: $5.35 per entry",
    },
  },
  {
    name: "Grand Mercure Roxy Hotel",
    weekday: {
      rate1: "Daily: $1.60 per hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Grand Pacific Hotel (Formerly Allson Hotel)",
    weekday: {
      rate1: "7am-5pm: $1.32 per ½ hr",
      rate2: "Aft 5pm: $3.57 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.57 per entry",
    },
  },
  {
    name: "Grand Park City Hall Hotel",
    weekday: {
      rate1: "7am-5pm: $3.28 for 1st hr; $1.55 for sub. ½ hr",
      rate2: "Aft 5pm: $5.35 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Grand Park Orchard",
    weekday: {
      rate1: "8am-5pm: $3.50 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Hilton Hotel",
    weekday: {
      rate1: "8am-6pm: $7 for 1st hr",
      rate2: "Aft 6pm: $7 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$7 per entry",
    },
  },
  {
    name: "Holiday Inn Atrium",
    weekday: {
      rate1: "7am-5pm: $1.80 per hr",
      rate2: "Aft 5pm: $3.60 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.60 per entry",
    },
  },
  {
    name: "Holiday Inn Express Singapore",
    weekday: {
      rate1: "$3 per ½ hr.",
      rate2: "$3 per ½ hr.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Holiday Inn Singapore Orchard City Centre",
    weekday: {
      rate1: "$3 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "$3 for 1st hr; $1.50 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Inter-continental Hotel",
    weekday: {
      rate1:
        "8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10mins (Car park at Parco Bugis Junction)",
      rate2:
        "Mon-Thu: Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins",
    },
    saturday: {
      rate: "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "klapsons, The Boutique Hotel",
    weekday: {
      rate1:
        "6.30am to 6.30pm - first 3 hours at $3.00 and subsequent half an hour at $1.50",
      rate2: "6.30pm to 6.30am - $ 4.00 flat",
    },
    saturday: {
      rate: "After 2pm - $4.00 flat",
    },
    sunPH: {
      rate: "$4.00 flat",
    },
  },
  {
    name: "Landmark Village Hotel (Formally Golden Landmark Hotel)",
    weekday: {
      rate1: "8am-5pm: $1.90 for 1st hr; $1.07 for sub. ½ hr",
      rate2: "Aft 5pm: $2.14 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.14 per entry",
    },
  },
  {
    name: "M Hotel",
    weekday: {
      rate1: "7am-6pm: $1.50 per ½ hr",
      rate2: "Aft 6pm: $3 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3 per entry after 1pm",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Mandarin Orchard Singapore",
    weekday: {
      rate1: "7am-6pm: $3.50 for 1st hr; $1.20 for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Mandarin Oriental Hotel",
    weekday: {
      rate1:
        "Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)",
      rate2: "Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Marina Bay Sands",
    weekday: {
      rate1:
        "7am-7pm: $6 for 1st hr; $1 for sub. hr; (Capped at $26 every 24hrs)",
      rate2: "Aft 7pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Marina Mandarin Hotel",
    weekday: {
      rate1:
        "Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)",
      rate2:
        "Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr for sub. ½ hr",
    },
    saturday: {
      rate: "Fri-Sun/PH: 7am-2am :$2.40 for 1st 2hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr for sub. ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Novotel Clarke Quay",
    weekday: {
      rate1: "7am-5pm: $1.07 per hr",
      rate2: "Aft 5pm: $3.21 per entry",
    },
    saturday: {
      rate: "7am-1pm: $1.07 per hr; Aft 1pm: $3.21 per entry",
    },
    sunPH: {
      rate: "$3.21 per entry",
    },
  },
  {
    name: "One Fullerton",
    weekday: {
      rate1: "7am-6pm: $2.50 per ½ hr",
      rate2: "After 6pm: $5 per entry",
    },
    saturday: {
      rate: "$5 per entry",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Orchard Grand Court Hotel",
    weekday: {
      rate1: "7am-5pm: $2.50 per hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Orchard Hotel Shopping Arcade",
    weekday: {
      rate1: "7am-6pm: $5 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 6pm: $5.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Orchard Parade Hotel",
    weekday: {
      rate1: "7am-5pm: $4 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 6pm: $4 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$4 per entry",
    },
  },
  {
    name: "Pan Pacific Hotel",
    weekday: {
      rate1:
        "Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)",
      rate2: "Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Pan Pacific Orchard",
    weekday: {
      rate1: "7am-5pm: $4 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $4 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$4 per entry",
    },
  },
  {
    name: "Paramount Hotel",
    weekday: {
      rate1: "8am-5pm: $0.60 per ½ hr",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.50 per entry",
    },
  },
  {
    name: "PARKROYAL on Beach Road",
    weekday: {
      rate1:
        "7am-5pm: Multi Storey Carpark - $2.50 for 1st hr; $1.50 for sub. ½ hr. Hotel Driveway - $6 for 1st hr; $2 for sub. ½ hr.",
      rate2:
        "Aft 5pm: Multi Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry.",
    },
    saturday: {
      rate: "Charges same as wkdays but $2.50 per entry (Multi-Storey Carpark) & $6 per entry (Hotel Driveway) after 1pm.",
    },
    sunPH: {
      rate: "Multi-Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry.",
    },
  },
  {
    name: "Peninsula Excelsior Hotel",
    weekday: {
      rate1: "8am-5pm: $2.60 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $4 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "8am-5pm: $1.50 per hr; Aft 5pm: $4 per entry",
    },
  },
  {
    name: "Rendezvous Hotel",
    weekday: {
      rate1: "Daily: $3.20 for 1st 2hrs; $1.60 for sub. hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Royal Plaza On Scotts",
    weekday: {
      rate1: "8am-6pm: $4 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 6pm: $5.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5.50 per entry",
    },
  },
  {
    name: "Shangri-la Hotel",
    weekday: {
      rate1: "7am-5pm: $6 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 5pm: $8 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Sheraton Towers Hotel",
    weekday: {
      rate1: "7am-6pm: $4 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$6 per entry",
    },
  },
  {
    name: "Singapore Marriott Hotel",
    weekday: {
      rate1: "6am-6pm: $0.05 per min/$3 per hr",
      rate2: "Aft 6pm: $0.05 per min/$3 per hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Swissotel Merchant Court Hotel",
    weekday: {
      rate1: "Daily: $4.50 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Swissotel Stamford Hotel",
    weekday: {
      rate1:
        "8am-5pm: $2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "$2 for 1st 2hrs; $0.30 for sub. 15mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "The Ritz Carlton, Millenia Singapore",
    weekday: {
      rate1: "7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "$2.20 for 1st 2hrs; $1.10 for sub. hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Traders Hotel",
    weekday: {
      rate1: "6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr",
      rate2: "Aft 5pm: $3.50 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3.50 per entry after 1pm",
    },
    sunPH: {
      rate: "$3.50 per entry",
    },
  },
  {
    name: "York Hotel",
    weekday: {
      rate1: "8.01am-6pm: $4 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 6pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "313@Somerset",
    weekday: {
      rate1: "$2 for 1st hr; $1 for sub. ½ hr",
      rate2: "Aft 6pm: $4.50 for 1st 3hrs; $1.50 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as weekdays",
    },
    sunPH: {
      rate: "$4.50 for 1st 3hrs; $1.50 for sub ½ hr",
    },
  },
  {
    name: "Angullia Park Off-Street",
    weekday: {
      rate1: "$1.00 /30 mins (Per Minute Charging)",
      rate2: "$0.50 /30 mins (Per Minute Charging)",
    },
    saturday: {
      rate: "0700-1700 : $1.00 per 30 mins; 1700-0700: $0.50 per 30 mins (Per Minute Charging)",
    },
    sunPH: {
      rate: "$0.50 /30 mins (Per Minute Charging)",
    },
  },
  {
    name: "Atrium @ Orchard",
    weekday: {
      rate1:
        "Mon-Thurs: 12am-5.59pm: $1.07 for 1st hr; $0.32 for sub. 15mins; Fri & Eve of PH: $1.07 for 1st hr; $0.32 for sub. 15mins",
      rate2:
        "Mon-Thurs: 6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am (the next day): $2.14 per entry",
    },
    saturday: {
      rate: "3am-5.59pm: $2.14 for 1st 2 hrs; $0.32 for sub. 15mins; Aft 6pm: $2.14 per entry",
    },
    sunPH: {
      rate: "3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins.  6pm-11.59pm: $2.14 per entry",
    },
  },
  {
    name: "Cathay Cineleisure Orchard",
    weekday: {
      rate1: "From 7am: $2.40 for 1st hr; $1.40 for sub. ½ hr",
      rate2: "Aft 6pm: $4.50 for 1st 3hrs; $1.60 for sub.½ hr",
    },
    saturday: {
      rate: "From 7am: $4.50 for 1st 3hrs; $1.60 for sub. ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "ComCentre (Exeter Rd)",
    weekday: {
      rate1: "7am-6pm: $3 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "6pm-6.59am: $3.50 per entry",
    },
    saturday: {
      rate: "7am-12.59pm: $3 for 1st hr; $1.50 for sub. ½ hr.  1pm-10pm: $3 for 1st 2hr; $1.20 for sub. ½ hr.",
    },
    sunPH: {
      rate: "7am-10pm: $3 for 1st 2 hr; $1.20 for sub. ½ hr",
    },
  },
  {
    name: "Concorde Hotel",
    weekday: {
      rate1: "7am-6pm: $2.14 for 1st hr; $1.39 for sub. ½ hr",
      rate2: "Aft 6pm: $3.75 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.75 per entry",
    },
  },
  {
    name: "27 West Coast Highway",
    weekday: {
      rate1:
        "0000-0700: $0.75 / 30 mins (Capped at $4.28). 0700-2000: $0.75 / 30 mins (Capped at $4.28)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Delfi Orchard",
    weekday: {
      rate1: "8am-5pm: $3 for 1st hr; $1.93 for sub. ½ hr",
      rate2: "5pm-11pm: $4.07 per entry (Car park closed at 11pm daily)",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "8am-11pm: $4.07 per entry",
    },
  },
  {
    name: "Elizabeth Hotel",
    weekday: {
      rate1: "7am-6pm: $4 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 6pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Far East Plaza",
    weekday: {
      rate1: "8am-5pm: $2.14 for 1st hr; $1.07 for sub. ½ hr.",
      rate2: "Aft 5pm: $3.53 per entry.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.53 per entry.",
    },
  },
  {
    name: "Far East Shopping Centre",
    weekday: {
      rate1: "8am-5pm: $2.57 per hr; $1.28 for sub. ½hr.",
      rate2:
        "5pm-12am: $3.75 per entry; 12am-8am the following day: $3.75 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "8am-12am: $3.75 per entry; 12am-8am the folowing day : $3.75 per entry",
    },
  },
  {
    name: "Forum The Shopping Mall",
    weekday: {
      rate1: "6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr",
      rate2: "Aft 5pm: $3.20 per entry",
    },
    saturday: {
      rate: "6am-5pm: $2.60 for 1st hr; $1.40 for sub. ½ hr, Aft 5pm: $3.20 per entry",
    },
    sunPH: {
      rate: "$3.20 per entry",
    },
  },
  {
    name: "Four Seasons Hotel",
    weekday: {
      rate1: "6am-5pm: $6 for 1st hr; $3 for sub. ½ hr",
      rate2: "Aft 5pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Goodwood Park Hotel",
    weekday: {
      rate1: "8am-6pm: $4 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 6pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Grand Hyatt Singapore",
    weekday: {
      rate1: "4am-4.59pm: $3.21 for 1st hr; $1.07 for sub. ½ hr",
      rate2: "Aft 5pm: $5.35 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "4am-3.59am: $5.35 per entry",
    },
  },
  {
    name: "Grand Park Orchard",
    weekday: {
      rate1: "8am-5pm: $3.50 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Grange Road Off-Street",
    weekday: {
      rate1: "$1.00 /30 Mins (Per Minute Charging)",
      rate2: "$0.50 /30 mins (Per Minute Charging)",
    },
    saturday: {
      rate: "0700-1700: $1.00 / per 30 mins. 1700-0700: $0.50 / per 30 mins (Per Minute Charging)",
    },
    sunPH: {
      rate: "$0.50 / 30 Mins. (Per Minute Charging)",
    },
  },
  {
    name: "Hilton Hotel",
    weekday: {
      rate1: "$7 per hr.",
      rate2: "Aft 6pm: $7 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Holiday Inn Express Singapore",
    weekday: {
      rate1: "$3 per ½ hr.",
      rate2: "$3 per ½ hr.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Holiday Inn Singapore Orchard City Centre",
    weekday: {
      rate1: "$3 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "$3 for 1st hr; $1.50 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "International Building",
    weekday: {
      rate1: "Carpark not in use",
      rate2: "Carpark not in use",
    },
    saturday: {
      rate: "Carpark not in use",
    },
    sunPH: {
      rate: "Carpark not in use",
    },
  },
  {
    name: "ION Orchard",
    weekday: {
      rate1: "Mon-Thu: 8am-4.59pm: $2.67 for 1st hr; $0.64 for sub. 15 mins",
      rate2: "Mon-Thu: 5pm-11.59pm: $3 per entry. 12am-7.59am $1.07 per hr",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 8am-4.59pm: $2.56 for 1st hr; $0.94 for sub. 15 mins. 5-11.59pm: $3.74 per entry. 12am-7.59am $1.07 per hour",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Liat Towers",
    weekday: {
      rate1: "7am-6pm: $2.50 for 1st hr; $1.30 for sub. ½ hr",
      rate2: "6pm-12am: $3.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Tanglin Shopping Centre",
    weekday: {
      rate1: "8am-5.59pm: $3 for 1st hr; $1.75 for sub. ½ hr",
      rate2: "Aft 6pm: $3.60 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.60 per entry",
    },
  },
  {
    name: "Lucky Plaza",
    weekday: {
      rate1: "7am-4.59pm: $1.93 for 1st hr; $1.28 for sub. ½ hr",
      rate2: "Aft 5pm: $3.38 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Sun: 7am-9.59pm: $1.93 for 1st hr; $1.28 for sub. ½ hr; 10pm-6.59am: $3.38 per entry. PH: $4 per entry (Does not applies if PH falls on Sun)",
    },
  },
  {
    name: "Mandarin Gallery",
    weekday: {
      rate1: "6am-6pm: $3.50 for 1st hr; $0.05 per min",
      rate2: "6pm-6am: $3.50 for 1st hr; $0.03 per min",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Meritus Mandarin Singapore",
    weekday: {
      rate1: "6am-6pm: $3.50 for 1st hr; $1.30 for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Ngee Ann City",
    weekday: {
      rate1:
        "12.01am-12pm, 2.01pm-5pm: $1.28 for ½ hr , 12.01pm-2pm: $1.82 for ½ hr",
      rate2: "5.01pm-7pm:$1.82 for ½ hr; Aft 7pm: $4.28 per entry",
    },
    saturday: {
      rate: "12.01am-12pm, 2.01pm-5pm: $2.57 for 1st hr; $1.61 for sub. ½ hr, 12.01pm-2pm, 5.01pm-7pm: $3.64 for 1st hr; $2.14 for sub. ½ hr, Aft 7pm: $4.28 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "OG Orchard Point",
    weekday: {
      rate1:
        "7am-10.59pm:$2 for 1st hr or part thereof; $1.50 per sub. ½ hr or part thereof.",
      rate2: "11pm-6.59am: $2 per ½ hr or part thereof.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Orchard Building",
    weekday: {
      rate1:
        "7am-5pm: $2.20 for 1st hr; $1.20 for sub. ½ hr (Car park closed at 1am daily )",
      rate2: "5pm-1am: $3.60 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-5pm: $3.60 for 1st 3hrs; $1.20 for sub. ½ hr; 5pm-1am: $3.60 per entry",
    },
  },
  {
    name: "Orchard Central",
    weekday: {
      rate1: "2am-6pm: $2 for 1st hr; $1 for sub. ½ hr",
      rate2: "6pm-2am: $4.50 for 1st 3hrs; $1.50 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "2am-2am: $4.50 for 1st 3hrs; $1.50 for sub. ½ hr",
    },
  },
  {
    name: "Orchard Hotel Shopping Arcade",
    weekday: {
      rate1: "7am-6pm: $5 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 6pm: $5.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Orchard Parade Hotel",
    weekday: {
      rate1: "$4 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "$4 for 1st hr; $1.50 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Orchard Plaza",
    weekday: {
      rate1: "7am-5pm: $1.39 for ½ hr",
      rate2: "Aft 5pm: $3.85 per entry for 1st 3 hrs; $1.39 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Orchard Towers",
    weekday: {
      rate1: "7am-5.59pm: $5 per hr",
      rate2: "6pm-1.59am: $9 per entry. After 2am: $9 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-1.59pm: $9 per entry. 2am-6.59pm: $9 per entry",
    },
  },
  {
    name: "orchardgateway",
    weekday: {
      rate1:
        "12am-5.59pm: $3 for 1st 1½ hrs or part thereof; $1.50 for sub. ½ hr or part thereof.",
      rate2:
        "6pm-11.59pm: $4.80 1st 2½ hrs or part thereof; $1.80 for sub. ½ hr or part thereof.",
    },
    saturday: {
      rate: "$4.80 1st 2½ hrs or part thereof; $1.80 for sub. ½ hr or part thereof.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Pacific Plaza",
    weekday: {
      rate1: "8am-6pm: $1.50 per ½ hr",
      rate2: "Aft 6pm: $3 for 1st 2hrs; $1 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Palais Renaissance",
    weekday: {
      rate1: "7am-5pm: $2.80 for 1st hr; $1.60 for sub. ½ hr",
      rate2: "5pm-1am: $3.80 per entry; Aft 1am: $1.50 per hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-1am: $3.80 per 4-hourly; 1am-7am: $1.50 per hr",
    },
  },
  {
    name: "Pan Pacific Orchard",
    weekday: {
      rate1: "7am-5pm: $5 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Paragon Shopping Centre",
    weekday: {
      rate1:
        "3am-5.59pm: $2.58 for 1st hr; $1.48 for sub. ½ hr. Daily $2 surcharge from 9am-9pm.  Additional Peak Hr Surcharge of $1.28 from 12pm to 2:30pm daily.",
      rate2: "Aft 6pm: $3.48 per entry. Daily $2 surcharge from 9am-9pm.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "3am-5.59pm: $3.48 for 1st 2hrs; $0.05 for sub. mins. Aft 6pm: $3.48 per entry. Daily $2 surcharge from 9am-9pm.  Additional Peak Hr Surcharge of $1.28 from 12pm to 2:30pm daily.",
    },
  },
  {
    name: "Penang Road Off-Street",
    weekday: {
      rate1: "$1.00 / 30 mins (Per Minute Charging)",
      rate2: "$0.50 / 30 mins (Per Minute Charging)",
    },
    saturday: {
      rate: "0700-1700 : $1.00 / per 30 mins. 1700-0700: $0.50 / per 30 mins (Per Minute Charging)",
    },
    sunPH: {
      rate: "$0.50 / 30 mins (Per Minute Charging)",
    },
  },
  {
    name: "Plaza Singapura",
    weekday: {
      rate1:
        "Mon-Thu:$1.07 for 1st hr; $0.32 for sub. 15mins.  Fri & Eve of PH: $2.14 for 1st 2 hr; $0.32 for sub. 15mins.",
      rate2:
        "Mon-Thu: 6pm-11.59pm: $2.14 per entry; Fri & Eve of PH: 6pm-2.59am: $2.14 per entry",
    },
    saturday: {
      rate: "3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins; Aft 6pm: $2.14 per entry",
    },
    sunPH: {
      rate: "3am-5.59pm: $2.14 for 1st 2hrs; $0.32 for sub. 15mins. 6pm-11.59pm: $2.14 per entry",
    },
  },
  {
    name: "Regent Hotel",
    weekday: {
      rate1: "7am-6pm: $5 for 1st hr; $2.50 for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Royal Plaza On Scotts",
    weekday: {
      rate1: "8am-6pm: $4 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 6pm: $5.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5.50 per entry",
    },
  },
  {
    name: "Scape",
    weekday: {
      rate1: "7am-4.59pm: $1.95 per hr",
      rate2: "5pm-6.59am: $4.90 for 1st 3hrs; $1.95 for sub. hr",
    },
    saturday: {
      rate: "All day: $1.95 per hr or part thereof.",
    },
    sunPH: {
      rate: "7am-4.59pm: $1.95 per hr, 5pm-6.59am: $4.90 for 1st 3hrs; $1.95 for sub. hr.",
    },
  },
  {
    name: "Shangri-la Hotel",
    weekday: {
      rate1: "7am-5pm: $6 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 5pm: $8 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Shaw Centre",
    weekday: {
      rate1: "3.01am-6pm: $2 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "6.01pm-3.01am: $4 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Shaw House",
    weekday: {
      rate1: "3.01am-6pm: $2 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "6.01pm-3.01am: $4 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Sheraton Towers Singapore",
    weekday: {
      rate1: "7am-6pm: $4 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$6 per entry",
    },
  },
  {
    name: "Singapore Marriott Hotel",
    weekday: {
      rate1: "6am-6pm: $0.05 per min/$3 per hr",
      rate2: "Aft 6pm: $0.05 per min",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Singapore Shopping Centre",
    weekday: {
      rate1: "8am-8pm: $2.50 for 1st hr; $1.25 for sub. ½ hr",
      rate2: "Aft 8pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Starhub Centre",
    weekday: {
      rate1: "7am-6pm: $2 for 1st hr; $1.50 for sub. ½ hr",
      rate2:
        "6pm-7am the following day:$2.00 for 1st hr, $1.50 for next subq 1/2hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Tanglin Mall",
    weekday: {
      rate1: "6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr",
      rate2: "Aft 5pm: $3.50 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3.50 per entry after 1pm",
    },
    sunPH: {
      rate: "$3.50 per entry",
    },
  },
  {
    name: "Memories at Old Ford Factory",
    weekday: {
      rate1: "Daily free parking at Carparks C and D",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Tangs",
    weekday: {
      rate1: "6am-6pm: $3 for 1st hr, $0.05/min",
      rate2: "6pm-6am the following day: $6 Per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "The Cathay",
    weekday: {
      rate1: "8am-9:59am: $1.40 for ½ hr; 10am-9:59pm: $1.40 per hr",
      rate2: "Aft 10pm: $3 per entry",
    },
    saturday: {
      rate: "8am-9:59pm: $1.40 per hr; Aft 10pm: $3 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "The Centrepoint",
    weekday: {
      rate1: "7am-5pm: $2 for 1st hr; $1.50 sub. ½ hr",
      rate2: "Aft 5pm: $2 for 1st hr; $1.50 sub. hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2 for 1st hr; $1.50 for sub. hr",
    },
  },
  {
    name: "The Heeren",
    weekday: {
      rate1: "8am-11pm: $1.50 per ½ hr",
      rate2: "8am-11pm: $1.50 per ½ hr",
    },
    saturday: {
      rate: "8am-11pm: $5 for 1st 3 hrs and $1.50 for subseqent ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Traders Hotel",
    weekday: {
      rate1: "6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr",
      rate2: "Aft 5pm: $3.50 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3.50 per entry after 1pm",
    },
    sunPH: {
      rate: "$3.50 per entry",
    },
  },
  {
    name: "TripleOne Somerset",
    weekday: {
      rate1: "7am-5.59pm: $1.50 per ½ hr (charges are before GST)",
      rate2: "6pm-11.59am: $1.80 per hr; 12am-6.59am:$0.50 sub 15 mins.",
    },
    saturday: {
      rate: "7am-5.59pm: $2 for 1st hr; $0.50 sub 15 mins. 6pm-11.59am: $1.80 per hr; 12am-6.59am:$0.50 sub 15 mins.",
    },
    sunPH: {
      rate: "7am-11.59pm: $1.80 per hr; 12am-6.59am:$0.50 sub 15 mins.",
    },
  },
  {
    name: "Wheelock Place",
    weekday: {
      rate1: "8am-6pm: $3 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 6pm: $4.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Winsland House",
    weekday: {
      rate1: "7am-7pm: $2.50 for 1st hr; $1.20 for sub. ½ hr",
      rate2: "7pm-11pm: $3.50 per entry. Aft 11pm: $3.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-11pm: $4.50 per entry. Aft 11pm: $3.50 per entry",
    },
  },
  {
    name: "Wisma Atria",
    weekday: {
      rate1:
        "7am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr (Lunch Hr Surcharge of additional $1.07 between 12pm - 2pm)",
      rate2: "Aft 5pm: $3.50 per entry",
    },
    saturday: {
      rate: "$3.60 for 1st 2hrs; $0.80 for sub. ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "York Hotel",
    weekday: {
      rate1: "8.01am-6pm: $4 for 1st hr; $2 for sub. ½ hr",
      rate2: "Aft 6pm: $5 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Changi Chapel and Museum (The Changi Museum)",
    weekday: {
      rate1: "Free daily",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Chinatown Heritage Centre",
    weekday: {
      rate1:
        "Parking is available at the public car park adjacent to the Buddha Tooth Relic Temple, URA centre and People's Park Centre.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Chinese Garden",
    weekday: {
      rate1: "6am-6pm: Free 1st hr; $0.50 for sub. ½ hr",
      rate2: "Aft 6pm: $0.50 per ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Haw Par Villa",
    weekday: {
      rate1: "Daily(9am-7pm): $5 per entry (Car park closed after 7pm)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Hay Dairies Goat Farm",
    weekday: {
      rate1: "Free daily: 9am-4pm",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Jurong Bird Park",
    weekday: {
      rate1: "Daily(8am-5pm): $2 per entry",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Labrador Secret Tunnel ( Labrador Park )",
    weekday: {
      rate1: "Free daily",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Mandai Orchid Garden",
    weekday: {
      rate1: "Free daily",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Mount Faber (Jewel Box)",
    weekday: {
      rate1:
        "Limited public parking spaces availiable. Valet parking at The Jewel Box is available at $5 per car",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "National Museum of Singapore",
    weekday: {
      rate1:
        "Limited parking facility is available at the National Museum. Other parking facilities are available at YMCA, Singapore Management University and Fort Canning Park",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Reflections at Bukit Chandu",
    weekday: {
      rate1: "Daily free parking at Carparks C and D of Pepys Road",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Resorts World Sentosa - Universal Studios Singapore (RWS B1 car park)",
    weekday: {
      rate1:
        "Mon-Thu: 7am-7pm: $7 for 1st hr; $1 for sub. ½ hr or part thereof. (Max: $28 per 24 hrs)",
      rate2: "Aft 7pm: $6 per entry",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof.  Aft 7pm: $8 per entry (Max: $28 per 24 hrs)",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Royal Selangor Pewter Museum ( Park at Clarke Quay)",
    weekday: {
      rate1: "$2.20 for 1st hr; $1.10 for sub. ½ hr (Car park at Clarke Quay)",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.50 per entry",
    },
  },
  {
    name: "Sentosa (Beach and Imbiah car park)",
    weekday: {
      rate1:
        "7am-5pm: Island Entry: $6 per car*; Parking - $3 for 1st 4hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car",
      rate2: "5.01pm-6.59am: Island entry: $2 per car*; parking - $1 per entry",
    },
    saturday: {
      rate: "7am-5pm: Island entry: $7 per car*; Parking - $5 for 1st 4 hrs; $2 for sub. hr; 5.01pm-6.59am: $3 per car*; parking - $2 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Sentosa (Tanjong & Palawan car park)",
    weekday: {
      rate1:
        "7am-5pm: Island Entry: $6 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr. Except 12pm-2pm: Island Entry $2 per car*, free parking. *Rates covers all passengers in car",
      rate2: "5.01pm-6.59am: Island entry: $2 per car*; parking - $1 per entry",
    },
    saturday: {
      rate: "7am-5pm: Island entry: $7 per car*; Parking - $3 for 1st 8hrs; $1 for sub. hr; 5.01pm-6.59am: $3 per car*; parking - $1 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Singapore Art Museum",
    weekday: {
      rate1:
        "Parking at SAM reserved for cars with NHB parking labels.  Nearest Carparks available at Waterloo Street, Queen Street, NTUC Income Centre, Plaza by the Park and Singapore Management University.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Singapore Botanic Gardens",
    weekday: {
      rate1:
        "7am-10.30pm: $0.02 per min (8am-9am: $1 peak hr charge for all passing vehicles that enter from Kheam Hock Road and exit at Evans/Cluny Road) - Closed from 12am-5am daily",
      rate2: "7pm-10.30pm: $2 per maximum cap",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Singapore City Gallery (URA centre)",
    weekday: {
      rate1:
        "6am-10pm: $1.10 per ½ hr (per min charging) Public parking is also available at the Erskine Road Off-Street Carpark next to Maxwell Road Food Centre.",
      rate2: "10pm-6am: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "6am-10pm: $0.55 per ½ hr (per min charging); Aft 10pm: $3 per entry",
    },
  },
  {
    name: "798 Upper Bukit Timah Road",
    weekday: {
      rate1: "0000-0700: $2.14 /30 mins. 0700-0000: $1.07 /30 mins.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Singapore Flyer",
    weekday: {
      rate1:
        "6am-6pm: $2 per hr or part thereof. Free Lunchtime Parking from 12pm to 2pm (only valid for vehicles entering the multi-storey carpark after 12pm).",
      rate2: "6pm-6am:$2 per entry.",
    },
    saturday: {
      rate: "6am-12midnight: $2 per hr or part thereof. 12midnight- 6am: $2 per entry.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Singapore Mint Coin Gallery",
    weekday: {
      rate1: "Wkdays free: 8.30am-4.30pm",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Singapore Philatelic Museum",
    weekday: {
      rate1:
        "URA coupon parking. Nearest car park at Armenian Street between Bible House and Peranakan Museum",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Singapore Science centre/Singapore Discovery Centre / Snow City",
    weekday: {
      rate1: "Daily: $0.50 per ½ hour",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Singapore Turf Club (STC)",
    weekday: {
      rate1: "Daily: $5 per entry",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Singapore Zoological gardens/Night Safari",
    weekday: {
      rate1:
        "Daily: $3 for 1st hr; $2 sub. hr or part thereof. 4th hour onwards: $8.00 flat rate (maximum)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Sungei Buloh Wetland Reserve",
    weekday: {
      rate1: "Daily free: 7am-7pm",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "The Arts House (Park at New Parliament House)",
    weekday: {
      rate1:
        "Available at current Parliament House, The Adelphi and the road side along Empress Place",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "The Battle Box ( Park at Fort Canning",
    weekday: {
      rate1: "URA coupon parking",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Underwater World Singapore",
    weekday: {
      rate1:
        "Mon-Thu: 7am-11.59pm: $7.50 for 1st 3 hrs; $5 per hr or part thereof",
      rate2: "Mon-Thu: 12am-06.59am: $20 per entry",
    },
    saturday: {
      rate: "Fri-Sun incl. PH & Sch Holidays:7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry",
    },
    sunPH: {
      rate: "Fri-Sun incl. PH & Sch Holidays:7am-11.59pm: $9 for 1st 3 hrs; $5 per hr or part thereof. 12am-06.59am: $20 per entry",
    },
  },
  {
    name: "10 Raeburn Park",
    weekday: {
      rate1: "$1.07 per hr",
      rate2: "1700-2300:- $2.14 per entry, 2300-0800: $1.07 per hr",
    },
    saturday: {
      rate: "0800-1700: $1.07 per hr, 1700-2300: $2.14 per entry, 2300-0800: $1.07 per hr",
    },
    sunPH: {
      rate: "$1.07 per hr",
    },
  },
  {
    name: "1557 Keppel Road",
    weekday: {
      rate1: "0700-1900:$1.29 for 1st hr, $0.43 /15 mins thereafter",
      rate2: "1900-0700: $2.14 /Entry",
    },
    saturday: {
      rate: "0700-1300:-$1.29 for 1st hr, $0.43 per 15 mins thereafter; 1300-0700: $2.14 /Entry",
    },
    sunPH: {
      rate: "$2.14 / Entry",
    },
  },
  {
    name: "34 Boon Leat Terrace",
    weekday: {
      rate1: "$0.80 / 30 mins",
      rate2: "1800-2200: $2.50 per entry. 2200-0700: $4.00 per entry",
    },
    saturday: {
      rate: "0700-1300: $0.80 /30 mins. 1300-0700: $4.00 /entry",
    },
    sunPH: {
      rate: "$4.00 / entry",
    },
  },
  {
    name: "798 Upper Bukit Timah Road",
    weekday: {
      rate1: "0000-0700: $2.14 /30 mins. 0700-0000: $1.07 /30 mins.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "8 Shenton Way",
    weekday: {
      rate1: "7am-6pm: $2.30 per ½ hr",
      rate2: "Aft 6pm: $2.80 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays but $2.80 per entry after 1pm",
    },
    sunPH: {
      rate: "$2.80 per entry",
    },
  },
  {
    name: "Amara Hotel",
    weekday: {
      rate1: "8am-4.59pm: $2 per ½ hr",
      rate2: "5pm-7.59am (the following day) : $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Asia Square",
    weekday: {
      rate1: "7am-5.59pm: $0.08 per min",
      rate2: "6pm onwards: $3 per entry",
    },
    saturday: {
      rate: "7am-6.59am (next day): $3 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Bangkok Bank Building",
    weekday: {
      rate1: "7am-7pm: $2 for 1st ½ hr; $4 for sub. hr",
      rate2: "7am-7pm: $2 for 1st ½ hr; $4 for sub. hr",
    },
    saturday: {
      rate: "Charges same as wkdays but Closed at 3pm",
    },
    sunPH: {
      rate: "Closed",
    },
  },
  {
    name: "Bayfront Avenue",
    weekday: {
      rate1: "7am-6pm: $3 per hr",
      rate2: "Aft 6pm: $1.20 per hr",
    },
    saturday: {
      rate: "7am-1pm: $3 per hr. Aft 1pm: $1.20 per hr",
    },
    sunPH: {
      rate: "$1.20 per hr",
    },
  },
  {
    name: "Berjaya Hotel",
    weekday: {
      rate1: "8.30am-5pm: $1 per ½ hr",
      rate2: "5pm-10pm: $1 per hr; Aft 10pm: Free",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "8.30am-10pm: $1 per hr. Aft 10pm: Free",
    },
  },
  {
    name: "Bugis Junction",
    weekday: {
      rate1: "8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10mins",
      rate2:
        "Mon-Thu: Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.37 for sub. 10 mins",
    },
    saturday: {
      rate: "$2.50 for 1st 2hrs; $0.37 for sub. 10 mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Burlington Square",
    weekday: {
      rate1: "7am-5pm: $0.04 per min",
      rate2: "Aft 5pm: $2.20 per entry",
    },
    saturday: {
      rate: "$0.06 per min",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "CapitaCommercial Trust (CCT)",
    weekday: {
      rate1: "$2.05 per ½ hr",
      rate2: "Aft 5pm: $3.10 per ½",
    },
    saturday: {
      rate: "Charges same as wkdays but $3.10 per ½ hr after 1pm",
    },
    sunPH: {
      rate: "$3.10 per ½ hr",
    },
  },
  {
    name: "Capital Square",
    weekday: {
      rate1: "8am-6pm: $2.20 for ½ hr or part thereof.",
      rate2: "6pm-8am: $3.20 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays but $3.20 per entry after 1pm",
    },
    sunPH: {
      rate: "$3.20 per entry",
    },
  },
  {
    name: "Capital Tower",
    weekday: {
      rate1: "7am-6pm: $2.80 per ½ hr",
      rate2: "Aft 6pm: $3.20 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays but $3.20 per entry after 1pm",
    },
    sunPH: {
      rate: "$3.20 per entry",
    },
  },
  {
    name: "Carlton Hotel",
    weekday: {
      rate1: "7am-6pm: $3 for 1st hr; $1.50 for for sub. ½ hr",
      rate2: "Aft 6pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Central Mall",
    weekday: {
      rate1: "6am-5pm: $2.00 for 1st hr; $1.00 for sub. ½ hr",
      rate2: "Aft 5pm: $3.00 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.00 per entry",
    },
  },
  {
    name: "Central ©",
    weekday: {
      rate1: "6am-5pm: $2.20 for 1st hr; $1.10 for sub. ½ hr or part thereof",
      rate2: "Aft 5pm: $3.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.50 per entry",
    },
  },
  {
    name: "Chijmes",
    weekday: {
      rate1: "8am-5.59am :$2.20 for 1st hr; $0.55 for sub. 15 mins.",
      rate2:
        "6pm-5.59am: (Valet Parking Only) Valet Charge $4 per entry, Carpark charges: $4 per hr.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "China Square Central",
    weekday: {
      rate1: "8am-6pm: $1.80 per ½ hr or part thereof.",
      rate2: "Aft 6pm: $3 per entry.  (12 midnight-6am: Closed)",
    },
    saturday: {
      rate: "$3 per entry. (12 midnight-6am: Closed)",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Chinatown Point",
    weekday: {
      rate1: "7am-5pm: $1.20 per ½ hr",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.50 per entry",
    },
  },
  {
    name: "Clarke Quay",
    weekday: {
      rate1:
        "7am-11.59am; 3pm-4.59pm: $2.14 for 1st 2hrs; $1.07 for sub. hr (Free parking between 12pm-2.59pm)",
      rate2: "Aft 5pm: $2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)",
    },
    saturday: {
      rate: "7am-4.59pm: $2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 5pm: $2.14 for 1st hr; $1.07 for sub. hr (Cap at $5.35)",
    },
    sunPH: {
      rate: "$2.68 per entry",
    },
  },
  {
    name: "Clifford Centre",
    weekday: {
      rate1: "6am-5pm: $5 per hr  (Car park closed at 11pm daily from Mon-Sat)",
      rate2: "5pm-11pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Conrad Centennial Singapore",
    weekday: {
      rate1: "7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "$2.20 for 1st 2hrs; $1.10 for sub. hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Copthorne King's Hotel",
    weekday: {
      rate1: "7am-12am: $3 for 1st hr; $1.50 for sub ½ hr",
      rate2: "Aft 12am: $4 for 1st hr; $2 for sub ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Copthorne Orchid Hotel",
    weekday: {
      rate1: "8am-5pm: $1.50 for 1st hr; $1 for sub. hr, per day $20)",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "CPF Building Robinson Road",
    weekday: {
      rate1: "6am-5pm: $1.50 per ½ hr",
      rate2:
        "Closed at 5pm. Cars remaining from 5pm onward will be charged an additional flat rate of $5",
    },
    saturday: {
      rate: "6am-1pm : $1.50 per ½ hr. Closed at 1:00pm. Cars remaining from 1:00pm onward will be charged an additional flat rate of $5",
    },
    sunPH: {
      rate: "Closed",
    },
  },
  {
    name: "DBS Building",
    weekday: {
      rate1: "6am-7pm: $2.57 per ½ hr",
      rate2: "Aft 7pm: $2.57 per entry",
    },
    saturday: {
      rate: "6am-1pm: $2.57 per ½ hr; aft 1pm: $2.57 per entry",
    },
    sunPH: {
      rate: "$2.57 per entry",
    },
  },
  {
    name: "Far East Square",
    weekday: {
      rate1: "6am-4.59pm: $2.14 per ½ hr",
      rate2: "Aft 5pm: $3.21 per entry",
    },
    saturday: {
      rate: "$3.21 per entry",
    },
    sunPH: {
      rate: "$3.21 per entry",
    },
  },
  {
    name: "Far Eastern Bank Building",
    weekday: {
      rate1: "7am-6pm: $2.30 per ½ hr",
      rate2: "Aft 6.30pm: $3.20 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays but $3.20 per entry after 1pm",
    },
    sunPH: {
      rate: "Closed",
    },
  },
  {
    name: "Fortune Centre",
    weekday: {
      rate1: "7am-7pm: $3.22 per hr",
      rate2: "Aft 7pm: $3.21 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Fu Lu Shou Complex",
    weekday: {
      rate1: "8am-5pm: $2.40 per hr",
      rate2: "Aft 5pm: $2.20 per entry (Car park closed at 12.30am daily)",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Fullerton Hotel",
    weekday: {
      rate1: "7am-6pm: $2.20 per ½ hr",
      rate2: "After 6pm: $5 per entry",
    },
    saturday: {
      rate: "$5 per entry",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "Funan DigitaLife Mall",
    weekday: {
      rate1: "12am-5.59pm: $2.14 for 1st hr; $0.54 for sub. 15mins",
      rate2: "6pm-9.59pm: $2.14 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Furama City Centre Singapore",
    weekday: {
      rate1: "5am-5pm: $1.40 for 1st ½ hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Furama Riverfront Singapore",
    weekday: {
      rate1: "7am-5pm: $1 per ½ hr",
      rate2: "Aft 5pm: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Gallery Hotel",
    weekday: {
      rate1:
        "12pm-2pm: $3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr, $0.50 for sub. ½ hr from 2.01pm to 6.00pm for Mon-Thu",
      rate2:
        "6pm-11.59pm: $3 for 1st hr; $1 for sub. ½ hr; $2 for 1st hr; $0.50 for sub. ½ hr  from 12am-11.59am for Mon-Thu",
    },
    saturday: {
      rate: "6am-11.59pm: $3 for 1st hr; $0.50 for sub. ½ hr, $3 for 1st hr; $0.50 for sub. ½ hr from 12am-1.59am for Fri-Sun/PH",
    },
    sunPH: {
      rate: "$2 for 1st hr; $0.50 for sub. ½ hr from 2.01am-6am for Fri-Sun/PH",
    },
  },
  {
    name: "Gillman Barracks",
    weekday: {
      rate1: "$0.50 / 30 mins",
      rate2: "From 1700: $2.00 / entry",
    },
    saturday: {
      rate: "0700-1800 - Free Parking; 1800-0700: $2/entry.",
    },
    sunPH: {
      rate: "Free Parking",
    },
  },
  {
    name: "Golden Mile Complex",
    weekday: {
      rate1: "7am-6pm: $2 for 1st hr; $1 for sub. ½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.20 per entry",
    },
  },
  {
    name: "Golden Shoe Complex",
    weekday: {
      rate1: "7am-5pm: $2.60 per ½ hr",
      rate2: "Aft 5pm: $3.30 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays but $3.30 per entry after 1pm",
    },
    sunPH: {
      rate: "$3.3 per entry",
    },
  },
  {
    name: "Grand Copthorne Waterfront Hotel",
    weekday: {
      rate1: "7am-5pm: $3.75 for 1st hr; $2.14 for sub. hr",
      rate2: "Aft 5pm: $4.28 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$4.28 per entry",
    },
  },
  {
    name: "Grand Pacific Hotel (Formerly Allson Hotel)",
    weekday: {
      rate1: "7am-5pm: $1.32 per ½ hr",
      rate2: "Aft 5pm: $3.57 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.57 per entry",
    },
  },
  {
    name: "Grand Park City Hall",
    weekday: {
      rate1: "7am-5pm: $3.28 for 1st hr; $1.55 for sub. ½ hr",
      rate2: "Aft 5pm: $5.35 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Great Eastern Centre",
    weekday: {
      rate1:
        "8am-6pm: $1.80 per ½ hr (Car park at China square central; B2 closed from 12am-6am daily)",
      rate2: "6pm-12am: $3 per entry",
    },
    saturday: {
      rate: "8am-12am: $3 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Great World City",
    weekday: {
      rate1: "6.01am-5pm: $1.55 per hr",
      rate2: "Aft 5pm: $3.30 per entry",
    },
    saturday: {
      rate: "$1.65 per hr (Max. of $6.00 per entry)",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Harbourfront Centre",
    weekday: {
      rate1: "7am-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr",
      rate2: "6pm-1am: $2.40 per entry; Aft 1am: $2.04 per hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Holiday Inn Atrium Singapore",
    weekday: {
      rate1: "7am-5pm: $1.80 per hr",
      rate2: "Aft 5pm: $3.80 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.80 per entry",
    },
  },
  {
    name: "Hong Leong Building",
    weekday: {
      rate1: "7am-5pm: $2.50 per ½ hr",
      rate2: "5pm-11pm: $3.10 per entry. Aft 11pm: Overnight Charge of $12",
    },
    saturday: {
      rate: "7am-1pm: $2.50 per ½ hr; 1pm-11pm: $3.10 per entry. Aft 11pm: Overnight Charge of $12",
    },
    sunPH: {
      rate: "7am-11pm: $3.10 per entry. Aft 11pm: Overnight Charge of $12",
    },
  },
  {
    name: "Hub Synergy Point (Formerly Apex tower)",
    weekday: {
      rate1: "7am-6pm: $1 per ½ hr",
      rate2: "6pm-12am: $1 per hr",
    },
    saturday: {
      rate: "7am-2pm: $1 per ½ hr; 2pm-12am: $1 per hr",
    },
    sunPH: {
      rate: "7am-12am: $1 per hr",
    },
  },
  {
    name: "Icon Village",
    weekday: {
      rate1: "7am-5pm: $1.50 per ½ hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "7am-1pm: $3 per hr; Aft 1pm: $3 per entry",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Iluma",
    weekday: {
      rate1: "8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10 mins",
      rate2:
        "Mon-Thu: Aft 5pm: $2.50 per entry; Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins",
    },
    saturday: {
      rate: "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Income At Raffles ( former Hitachi tower)",
    weekday: {
      rate1: "7.30am-5.59pm: $2.75 per ½ hr",
      rate2: "6pm to 7.29am : $3.30 per entry",
    },
    saturday: {
      rate: "7.30am-12.59pm: $2.75 per ½ hr. 1.00pm-7.29am: $3.30 per entry",
    },
    sunPH: {
      rate: "7.30am-7.29am: $3.30 per entry.",
    },
  },
  {
    name: "Inter-continental Singapore Hotel",
    weekday: {
      rate1: "8am-5pm: $1.07 for 1st hr; $0.37 for sub. 10mins",
      rate2:
        "Mon-Thu: Aft 5pm: $2.50 per entry. Fri: $2.50 for 1st 2hrs; $0.25 for sub. 10 mins",
    },
    saturday: {
      rate: "$2.50 for 1st 2hrs; $0.25 for sub. 10 mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "International Plaza",
    weekday: {
      rate1: "7am-5pm: $2.20 per ½ hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3 per entry after 3pm",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Keck Seng Tower",
    weekday: {
      rate1: "8am-6pm: $2.50 per ½ hr",
      rate2: "6pm-10pm: $2.50 per entry",
    },
    saturday: {
      rate: "8am-2pm: $2.50 per ½ hr; 2pm-10pm: $2.50 per entry",
    },
    sunPH: {
      rate: "Closed",
    },
  },
  {
    name: "Keppel Bay Tower / Harbourfront Tower One",
    weekday: {
      rate1: "7am-7pm: $1.05 per ½ hr",
      rate2: "7pm-1am: $3.10 per entry; Aft 1am: $3.10 per hr",
    },
    saturday: {
      rate: "7am-1pm: $1.05 per ½ hr; 1pm-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr; 6pm-1am: $2.40 per entry; Aft 1am: $3.10 per hr",
    },
    sunPH: {
      rate: "7am-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr; 6pm-1am: $2.40 per entry; Aft 1am: $3.10 per hr",
    },
  },
  {
    name: "Keypoint",
    weekday: {
      rate1: "$1.10 for ½ hr",
      rate2: "$2 per entry (close at midnight)",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2 per entry",
    },
  },
  {
    name: "klapsons, The Boutique Hotel",
    weekday: {
      rate1:
        "6.30am to 6.30pm - first 3 hours at $3.00 and subsequent half an hour at $1.50",
      rate2: "6.30pm to 6.30am - $ 4.00 flat",
    },
    saturday: {
      rate: "After 2pm - $4.00 flat",
    },
    sunPH: {
      rate: "$4.00 flat",
    },
  },
  {
    name: "Landmark Village Hotel",
    weekday: {
      rate1: "8am-5pm: $1.90 for 1st hr; $1.07 for sub. ½ hr",
      rate2: "Aft 5pm: $2.14 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.14 per entry",
    },
  },
  {
    name: "Liang Court",
    weekday: {
      rate1: "7am-5pm: $1.07 per hr",
      rate2: "Aft 5pm: $3.21 per entry",
    },
    saturday: {
      rate: "7am-1pm: $1.07 per hr; Aft 1pm: $3.21 per entry",
    },
    sunPH: {
      rate: "$3.21 per entry",
    },
  },
  {
    name: "M Hotel",
    weekday: {
      rate1: "7am-6pm: $1.50 per ½ hr",
      rate2: "Aft 6pm: $3 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3 per entry after 1pm",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Mandarin Oriental Hotel",
    weekday: {
      rate1:
        "Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)",
      rate2: "Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Marina Bay Financial Centre Tower 1, 2 ,3 & Marina Bay Link Mall",
    weekday: {
      rate1: "6am-6pm: $1.07 per 10 mins",
      rate2: "Aft 6pm: $3.21 for 1st 4hrs; $0.27 for sub. 10 mins",
    },
    saturday: {
      rate: "$3.21 for 1st 4hrs; $0.27 for sub. 10 mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Marina Bay Sands",
    weekday: {
      rate1:
        "7am-7pm: $7 for 1st hr; $1 for sub.½ hr; (Capped at $26 every 24hrs)",
      rate2: "Aft 7pm: $7 per entry",
    },
    saturday: {
      rate: "Sat, Sun & Eve of PH: 7am-7pm: $8 for 1st hr; $1 for sub. ½ hr; Aft 7pm: $8 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Marina Mandarin Hotel",
    weekday: {
      rate1:
        "Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)",
      rate2: "Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Marina Square",
    weekday: {
      rate1:
        "Mon-Thu: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr",
      rate2: "Mon-Thu: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.40 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Millenia Singapore",
    weekday: {
      rate1: "7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "$2.20 for 1st 2hrs; $1.10 for sub. hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Millenia Walk (Basement Car Park)",
    weekday: {
      rate1: "7am-6pm: $3.30 for 1st hr; $1.10 for sub.½ hr",
      rate2: "Aft 6pm: $2.20 per entry",
    },
    saturday: {
      rate: "$2.20 for 1st 2hrs; $1.10 for sub. hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Millenia Walk (Surface parking @ L1)",
    weekday: {
      rate1: "7am-6pm: $4.28 for 1st hr; $1.605 for sub. ½ hr",
      rate2: "Aft 6pm: $4.28 for 1st 2hrs; $1.605 for sub. hr",
    },
    saturday: {
      rate: "$4.28 for 1st 2hrs; $1.605 for sub. hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Neil Road Off-Street",
    weekday: {
      rate1: "$1.00 per 30 mins (Per Minute Charging)",
      rate2: "$0.50 per 30 mins (Per Minute Charging)",
    },
    saturday: {
      rate: "0700-1700:$1.00 per 30 mins; 1700-0700: $0.50 per 30 mins (Per Minute Charging)",
    },
    sunPH: {
      rate: "$0.50 per 30 mins (Per Minute Charging)",
    },
  },
  {
    name: "North Bridge Centre",
    weekday: {
      rate1: "8am-5pm: $1.30 per ½ hr",
      rate2: "5pm-11pm: $3 per entry",
    },
    saturday: {
      rate: "$3 per entry",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Novotel Clarke Quay",
    weekday: {
      rate1: "7am-5pm: $1.07 per hr",
      rate2: "Aft 5pm: $3.21 per entry",
    },
    saturday: {
      rate: "7am-1pm: $1.07 per hr; Aft 1pm: $3.21 per entry",
    },
    sunPH: {
      rate: "$3.21 per entry",
    },
  },
  {
    name: "OCBC centre",
    weekday: {
      rate1: "7am-6pm: $4 per hr",
      rate2: "Aft 6pm: $3 per entry",
    },
    saturday: {
      rate: "$3 per entry",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "One Fullerton",
    weekday: {
      rate1: "7am-6pm: $2.50 per ½ hr",
      rate2: "Aft 6pm: $5 per entry",
    },
    saturday: {
      rate: "$5 per entry",
    },
    sunPH: {
      rate: "$5 per entry",
    },
  },
  {
    name: "One Raffles Quay",
    weekday: {
      rate1: "6am-6pm: $1.07 per 10mins",
      rate2: "Aft 6pm: $3.21 for 1st 4hrs; $0.27 per sub. 10 mins",
    },
    saturday: {
      rate: "$3.21 for 1st 4hrs; $0.27 per sub. 10 mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "OUB Centre",
    weekday: {
      rate1: "7am-5pm : $2.62 per ½ hr",
      rate2: "Aft 5pm: $3.21 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "OUE Bayfront (Formerly Overseas Union House)",
    weekday: {
      rate1: "7am-5.59pm: $0.86 per 10mins block",
      rate2: "Aft 6pm: $3.21 per entry",
    },
    saturday: {
      rate: "7am-2.59pm: $0.86 per 10mins block. 3pm-11.59am $3.21 per entry",
    },
    sunPH: {
      rate: "$3.21 per entry",
    },
  },
  {
    name: "Pan Pacific Hotel",
    weekday: {
      rate1:
        "Mon-Fri: 7am-5pm: $2.20 for 1st 2hrs; $1.10 per ½ hr for sub. ½ hr (Car Park at Marina Square)",
      rate2: "Mon-Fri: 5pm-2am: $2.20 per entry; 2am-7am: $1.10 per ½ hr",
    },
    saturday: {
      rate: "7am-2am :$2.40 for 1st 2 hrs; $1.20 per hr for sub. 2hrs; $1.20 per ½ hr for sub. ½ hr after 4 hrs of parking. 2am-7am: $1.10 per ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Parklane Shopping Mall",
    weekday: {
      rate1: "7am-7pm: $2.50 for 1st hr; $1.25 for sub. ½ hr",
      rate2: "7pm-12am: $2.50 per entry. Aft 12am: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-12am: $3 per entry",
    },
  },
  {
    name: "PARKROYAL on Beach Road",
    weekday: {
      rate1:
        "7am-5pm: Multi Storey Carpark - $2.50 for 1st hr; $1.50 for sub. ½ hr. Hotel Driveway - $6 for 1st hr; $2 for sub. ½ hr.",
      rate2:
        "Aft 5pm: Multi Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry.",
    },
    saturday: {
      rate: "Charges same as wkdays but $2.50 per entry (Multi-Storey Carpark) & $6 per entry (Hotel Driveway) after 1pm.",
    },
    sunPH: {
      rate: "Multi-Storey Carpark - $2.50 per entry. Hotel Driveway - $6 per entry.",
    },
  },
  {
    name: "Pearl's Centre",
    weekday: {
      rate1: "8.30am-5pm: $1.20 per ½ hr (max $22.90)",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.50 per entry",
    },
  },
  {
    name: "Peninsula Excelsior Hotel",
    weekday: {
      rate1: "8am-5pm: $2.60 for 1st hr; $1.50 for sub. ½ hr",
      rate2: "Aft 5pm: $4 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "8am-5pm: $1.50 per hr; Aft 5pm: $4 per entry",
    },
  },
  {
    name: "Peninsular Plaza",
    weekday: {
      rate1: "Season Parking Only",
      rate2: "Season Parking Only",
    },
    saturday: {
      rate: "Season Parking Only",
    },
    sunPH: {
      rate: "Season Parking Only",
    },
  },
  {
    name: "People's Park Centre",
    weekday: {
      rate1: "7am-5pm: $1.50 per ½ hr",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "PoMo (Fomerly Paradiz Centre)",
    weekday: {
      rate1: "8am-5pm: $1.25 per ½ hr",
      rate2: "Aft 5pm: $2.95 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.95 per entry",
    },
  },
  {
    name: "PWC Building",
    weekday: {
      rate1: "8am-6pm: $2.20 per ½ hr",
      rate2: "Aft 6pm: $3 per entry",
    },
    saturday: {
      rate: "$3 per entry",
    },
    sunPH: {
      rate: "Closed",
    },
  },
  {
    name: "Raffles City",
    weekday: {
      rate1: "8am-5.59pm: $2.20 for 1st hr; $0.55 for sub. 15mins",
      rate2: "6pm-7.59am: $3 per entry",
    },
    saturday: {
      rate: "$2.20 for 1st 2hrs, $0.40 for sub. 15mins for 3rd and 4th hr, $0.60 for sub. 15mins for 5th hr onwards.",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Raffles Hotel",
    weekday: {
      rate1: "12am-6pm: $3 for 1st ½ hr; $1.50 for sub. ½ hr",
      rate2: "6pm-12am: $6 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$6 per entry",
    },
  },
  {
    name: "Republic Plaza",
    weekday: {
      rate1: "7am-5pm: $3 per ½ hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3 per entry after 12pm",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Resorts World Sentosa",
    weekday: {
      rate1:
        "Mon-Thu: 7am-7pm: $7 for 1st hr; $1 for sub. ½ hr or part thereof. (Max: $28 per 24 hrs)",
      rate2: "Aft 7pm: $6 per entry",
    },
    saturday: {
      rate: "Fri/Sat-Sun/PH: 7am-7pm: $8 for 1st hr; $2 for sub. ½ hr or part thereof.  Aft 7pm: $8 per entry (Max: $28 per 24 hrs)",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Robertson Walk",
    weekday: {
      rate1:
        "6am-6pm: $1.50 for 1st hr or part thereof; $0.50 for sub. ½ hr or part thereof.",
      rate2: "Aft 6pm: $4 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$4 per entry",
    },
  },
  {
    name: "Robinson 77 (Formerly SIA Building)",
    weekday: {
      rate1: "7am-5pm: $2.4 per ½ hr",
      rate2: "5pm-11pm: $2.4 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $2.4 per entry after 2pm",
    },
    sunPH: {
      rate: "$2.4 per entry",
    },
  },
  {
    name: "Robinson Centre",
    weekday: {
      rate1: "8am-5pm: $2 per ½ hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $2 per entry after 1pm",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "School of the Arts, Singapore (SOTA)",
    weekday: {
      rate1: "7.00am-5.59pm: $2.50 per hr",
      rate2:
        "6pm-2am (the next day): $5 per entry. 2.01am-6.59am: $5 (additional flat fee for overnight parking)",
    },
    saturday: {
      rate: "7am-5.59pm: $2.50 per hr. 6pm-2am (the next day): $5 per entry. 2.01am-6.59am: $5 (additional flat fee for overnight parking)",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "SGX Centre",
    weekday: {
      rate1: "7am-5pm: $2.50 per ½ hr",
      rate2: "5pm-10pm: $3 per entry (The car park closed at 10pm daily)",
    },
    saturday: {
      rate: "7am-10pm: $3 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Shenton House",
    weekday: {
      rate1: "8am-5.30pm: $3 per ½ hr",
      rate2: "Aft 5.30pm: $3 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3 per entry after 2pm",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Sim Lim Square",
    weekday: {
      rate1: "3:30am-6pm: $0.05 per min",
      rate2:
        "Aft 6pm: $2 per entry (1st hr Free parking from 6pm-10pm daily inclusive of PH)",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Sim Lim Tower",
    weekday: {
      rate1: "8am-6pm: $1.50 per ½ hr",
      rate2: "Aft 6pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Singapore General Hospital (Carpark C, E, G & I)",
    weekday: {
      rate1: "7am-9.59pm: $0.036 per min/$2.16 per hr",
      rate2: "10pm-6.59am: $2.14 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-9.59pm: $0.018 per min/$1.08 per hr; Aft 10pm: $2.14 per entry",
    },
  },
  {
    name: "Singapore General Hospital (Multi-Storey Carpark H)",
    weekday: {
      rate1: "7am-9.59pm: $0.018 per min/$1.08 per hr",
      rate2: "10pm-6.59am: $2.14 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$2.14 per entry",
    },
  },
  {
    name: "Singapore Land Tower",
    weekday: {
      rate1: "For Tenants only",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Six Battery Road",
    weekday: {
      rate1: "7am-6pm: $3.10 per ½ hr",
      rate2: "Aft 6pm: $3.70 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $3.70 per entry after 1pm",
    },
    sunPH: {
      rate: "$3.70 per entry",
    },
  },
  {
    name: "Sunshine Plaza",
    weekday: {
      rate1: "7am-6pm: $1.07 per ½ hr",
      rate2: "Aft 6pm: $3.21 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Suntec City",
    weekday: {
      rate1: "7am-5pm: $2.20 for 1st hr; $1.10 for sub. ½ hr (excluding PH)",
      rate2: "5pm-12am:$2.20 per entry; Aft 12am:$1.10 per hr",
    },
    saturday: {
      rate: "$1.10 per hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Swissotel Merchant Court Hotel",
    weekday: {
      rate1: "Daily: $4.50 for 1st hr; $3 for sub. hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Swissotel The Stamford Hotel",
    weekday: {
      rate1:
        "8am-5pm: $2 for 1st hr; $0.50 for sub. 15mins (Car park at Raffles City Shopping Centre)",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "$2 for 1st 2hrs; $0.30 for sub. 15mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Tanjong Katong Complex",
    weekday: {
      rate1: "HDB coupon parking",
      rate2: "HDB coupon parking",
    },
    saturday: {
      rate: "HDB coupon parking",
    },
    sunPH: {
      rate: "HDB coupon parking",
    },
  },
  {
    name: "The Adelphi",
    weekday: {
      rate1: "6am-5pm: $2.40 for 1st hr; $1.20 for sub. ½ hr",
      rate2: "5pm-1am: $3.21 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "6am-1am: $3.21 per entry",
    },
  },
  {
    name: "The Concourse",
    weekday: {
      rate1: "7am-5pm: $2.14 for 1st hr; $1.07 for sub. ½ hr",
      rate2: "Aft 5pm: $2.14 per entry",
    },
    saturday: {
      rate: "Charges same as wkdays, but $1.07 per entry after 12pm",
    },
    sunPH: {
      rate: "$1.07 per entry",
    },
  },
  {
    name: "The Corporate Office",
    weekday: {
      rate1: "7am-5pm: $4 per hr",
      rate2: "Aft 5pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Closed",
    },
  },
  {
    name: "The Esplanade",
    weekday: {
      rate1:
        "6am-6pm: $2 per hr ($1.50 per ½ hr at Waterfront car park daily) 12pm-2pm $2 per entry",
      rate2: "6pm-10pm: $6 per entry; Aft 10pm: $2 per entry",
    },
    saturday: {
      rate: "6am-6pm: $2 per hr ($1.50 per ½ hr at Waterfront car park daily)",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "UE Square",
    weekday: {
      rate1: "8am-5pm: $2.00 for 1st hr; $1 for sub. hr",
      rate2: "Aft 5pm: $3 per entry",
    },
    saturday: {
      rate: "8am-1pm: $2.00 for 1st hr; $1 for sub. hr; Aft 11pm: $3 per entry",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "UOB Plaza",
    weekday: {
      rate1: "7am-6pm: $2.50 per ½ hr",
      rate2: "6pm-12am: $3.50 per entry. Aft 12am: $3.50 per entry",
    },
    saturday: {
      rate: "7am-12am: $3.50 per entry. Aft 12am $3.50 per entry",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Vivocity",
    weekday: {
      rate1: "7am-6pm: $1.20 for 1st hr; $0.60 for sub. ½ hr",
      rate2: "6.01pm-4am: $3 per entry; Aft 4am: $2.50 per hr",
    },
    saturday: {
      rate: "7am-6pm: $1.40 for 1st hr; $0.70 for sub. ½ hr; 6.01pm-4am: $3.50 per entry; Aft 4am: $2.50 per hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Alexandra Retail Centre",
    weekday: {
      rate1: "7am to 6pm: $2/hr or part thereof.",
      rate2:
        "6pm to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof.",
    },
    saturday: {
      rate: "7am to 10am: $2/hr or part thereof; 10am to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof.",
    },
    sunPH: {
      rate: "7am to 12mn: $2.40/entry; 12 mn to 7am: $2.40/hr or part thereof.",
    },
  },
  {
    name: "Anchorpoint Shopping Centre",
    weekday: {
      rate1:
        "8am-6.59pm: $1 for 1st ½ hr or part thereof; $2 for sub hr or part thereof.",
      rate2: "7pm-7.59am: $2.50 per entry.",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Bukit Panjang Plaza",
    weekday: {
      rate1: "12am to 6pm :$1.07 for 1st hr, $0.32/min for sub.min.",
      rate2: "6pm-12am: $2.14 per entry",
    },
    saturday: {
      rate: "12am to 6pm :$2.14 for 1st 2 hr, $0.32 for sub 15mins",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Bukit Timah Plaza (Multi-Storey Car Park)",
    weekday: {
      rate1: "7.30am-5pm: $1.28 per hr",
      rate2: "5pm-12am: $2.25 per entry. Aft 12am: $2.25 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Bukit Timah Shopping Centre",
    weekday: {
      rate1: "8am-5pm: $1.25 per hr",
      rate2: "Aft 5pm: $2.10 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Coronation Shopping Plaza",
    weekday: {
      rate1: "Daily(7.01am-7am): $2 per hr.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Holland Road Shopping Centre",
    weekday: {
      rate1: "12am-8.59pm: $1.55 per ½ hr",
      rate2: "Aft 9pm: $3.25 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "IKEA (Alexandra)",
    weekday: {
      rate1:
        "Daily :$0.05 per min, $1.50 per 30 Mins (subsequently charged on a per minute basis)",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "IMM Building",
    weekday: {
      rate1:
        "Free for 1st 2hrs for first entry only. Chargeable after 2nd hr of 1st entry @ $1.07 /hr; $0.30 for sub. 15 mins.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "JCube",
    weekday: {
      rate1:
        "3.30am-5.59pm: $1.30 for 1st hr; sub 15 mins or part thereof: $0.30. *Free 2 Hour Parking from 12 - 2pm daily (Monday - Friday) from now to 15 Oct 2015.",
      rate2: "6pm-3.29am: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Junction 10",
    weekday: {
      rate1: "$1.25 for 1st hr; $0.65 for sub. hr",
      rate2: "-",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Jurong Point Shopping Centre",
    weekday: {
      rate1:
        "7am-5pm: $1.07 for 1st 2hrs; $1.07 for sub. hr (Free parking from 12pm-2pm on Monday-Thursday)",
      rate2:
        "5pm-9pm: $2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 9pm: $1.07 for 1st 3hrs; $1.07 for sub. hr",
    },
    saturday: {
      rate: "$2.14 for 1st 2hrs; $1.07 for sub. hr; Aft 9pm: $1.07 for 1st 3hrs; $1.07 for sub. hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "Jurong Theatre",
    weekday: {
      rate1: "8am-8.59pm: $1.60 per hr",
      rate2: "Aft 9pm: $3 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3 per entry",
    },
  },
  {
    name: "Lot 1 Shopping Centre",
    weekday: {
      rate1: "12am-5.59pm: $1.07 for 1st hr; $0.32 for sub. 15 mins.",
      rate2:
        "Mon-Thurs, 6pm-11.59pm: $2.14 per entry. Fri & Eve of PH, 6pm-2.59am: $2.14 per entry.",
    },
    saturday: {
      rate: "3am-5.59pm: $2.14 for 1st 2-hrs; $0.32 for sub. 15 mins. 6pm-2.59am: $2.14 per entry.",
    },
    sunPH: {
      rate: "3am-5.59pm: $2.14 for 1st 2-hrs; $0.32 for sub. 15 mins. 6pm-11.59am: $2.14 per entry.",
    },
  },
  {
    name: "NUH",
    weekday: {
      rate1: "Daily: $0.03 per min",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Queensway Shopping Centre",
    weekday: {
      rate1: "8am-6pm: $2 for 1st 1½hr; $1.20 for sub. ½ hr",
      rate2: "Aft 6pm: $2.30 per entry",
    },
    saturday: {
      rate: "8am-6pm: $1.50 for 1st 1hr; $1.20 for sub. ½ hr; Aft 6pm: $2.30 per entry",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Savoy Theatre",
    weekday: {
      rate1: "8am-5pm: $1.20 per hr",
      rate2: "Aft 5pm: $3.00 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "$3.00 per entry",
    },
  },
  {
    name: "Serene Centre",
    weekday: {
      rate1: "8am-10pm: $1.53 for 1st hr; $1.53 for sub. ½ hr",
      rate2: "Aft 10pm: $1.53 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Sunshine Place",
    weekday: {
      rate1: "HDB coupon parking",
      rate2: "HDB coupon parking",
    },
    saturday: {
      rate: "HDB coupon parking",
    },
    sunPH: {
      rate: "HDB coupon parking",
    },
  },
  {
    name: "The Clementi Mall",
    weekday: {
      rate1: "Daily: $1.50 for 1st hr; $0.80 for sub. ½ hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "The Metropolis",
    weekday: {
      rate1: "6am-6pm: $2.50 for 1st hr, sub $1.25 per 1/2 hr",
      rate2:
        "Time period 1: 6pm-12am: $2.50 per entry; Time period 2: 12am-6am: $2.50 per entry",
    },
    saturday: {
      rate: "6am - 6pm: $1.00 per hour or part thereof; Aft 6pm same as wkdays",
    },
    sunPH: {
      rate: "6am - 6pm: $1.00 per hour or part thereof; Aft 6pm same as wkdays",
    },
  },
  {
    name: "The Star Vista",
    weekday: {
      rate1:
        "12am-11.59pm:$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof.",
      rate2: "$1.30 for 1st hr, $0.65 for sub. 30 mins or part thereof.",
    },
    saturday: {
      rate: "Sat & PH: Same as wkdays",
    },
    sunPH: {
      rate: "Sun:12am-11.59pm: $2.14 for 1st hr, $1.07 for sub. 30 mins or part thereof.",
    },
  },
  {
    name: "Tiong Bahru Plaza",
    weekday: {
      rate1: "$1.50 for 1st hr; $0.80 for sub. ½ hr",
      rate2: "$1.50 for 1st hr; $0.80 for sub. ½ hr",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "7am-6pm:$1.50 per hr; Aft 6pm: $3.60 per entry",
    },
  },
  {
    name: "Turf City",
    weekday: {
      rate1: "Daily: Free parking",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "Valley Point",
    weekday: {
      rate1: "Daily: $1.50 for 1st hr; $0.80 for sub. ½ hr",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
  {
    name: "West Coast Plaza (Ginza Plaza)",
    weekday: {
      rate1: "$1.25 for 1st hr; $1.00 for sub. ½ hr",
      rate2: "$1.25 for 1st hr; $1.00 for sub. ½ hr",
    },
    saturday: {
      rate: "$1.50 for 1st hr; $1.00 for sub. ½ hr",
    },
    sunPH: {
      rate: "Same as Saturday",
    },
  },
  {
    name: "West Mall",
    weekday: {
      rate1:
        "6am-5pm : $1.10 for 1st 2hrs or part thereof; $0.60 for sub. ½ hr or part thereof.",
      rate2: "5pm-6am: $2.50 per entry.",
    },
    saturday: {
      rate: "6am-5pm: $1.10 for 1st hr or part thereof; $0.60 for sub. ½ hr or part thereof; 5pm-6am: $2.50 per entry.",
    },
    sunPH: {
      rate: "6am-6am next day: $2.50 per entry.",
    },
  },
  {
    name: "Westgate",
    weekday: {
      rate1: "Daily: $1.30 for 1st hr; $0.50 for sub. 15 mins",
      rate2: "6pm - 11.59pm: $2.50 per entry",
    },
    saturday: {
      rate: "Same as wkdays",
    },
    sunPH: {
      rate: "Same as wkdays",
    },
  },
  {
    name: "Yew Tee Point",
    weekday: {
      rate1: "Daily: $1.18 for 1st hr; $0.64 for sub. ½ hr or part thereof.",
      rate2: "-",
    },
    saturday: {
      rate: "-",
    },
    sunPH: {
      rate: "-",
    },
  },
];

module.exports = { tempGov };
