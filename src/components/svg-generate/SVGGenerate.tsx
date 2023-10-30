import React from "react";

interface ISVGGenerate {
  className?: string;
  strokeClass?: string;
  name: string;
}
const SVGGenerate: React.FC<ISVGGenerate> = ({
  strokeClass,
  className,
  name,
}) => {
  // Define a function that generates SVG content based on the provided shape.
  const generateSVG = (name: string) => {
    switch (name) {
      case "check":
        return (
          <svg
            className={className}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="#0A2640" />
            <path
              className={strokeClass}
              d="M26 12L15 23L10 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "eye":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clipPath="url(#clip0_62_553)">
              <path
                className={strokeClass}
                d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_553">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.775024 0.654297)"
                />
              </clipPath>
            </defs>
          </svg>
        );
      case "leaf":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className={strokeClass}
              d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
              stroke="#0A2640"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={strokeClass}
              d="M16 8L2 22"
              stroke="#0A2640"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={strokeClass}
              d="M17.5 15H9"
              stroke="#0A2640"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "left-arrow":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              className={strokeClass}
              d="M5 14H19"
              stroke="#0A2640"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={strokeClass}
              d="M12 7L19 14L12 21"
              stroke="#0A2640"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "arrow":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="39"
            viewBox="0 0 36 39"
            fill="none"
          >
            <path
              className={strokeClass}
              d="M28.5 18L7.5 18"
              stroke="#0A2640"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={strokeClass}
              d="M18 28.5L7.5 18L18 7.5"
              stroke="#0A2640"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "logo":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100px"
            height="75px"
            viewBox="554.5 294.5 889 909.803955078125"
          >
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#69E6A6"
                d="M 1264.5,1125.5 C 1264.79,1127.74 1264.46,1129.74 1263.5,1131.5C 1259.34,1127.17 1255.34,1122.67 1251.5,1118C 1250.09,1117.68 1248.76,1118.02 1247.5,1119C 1238.73,1125.76 1230.57,1133.26 1223,1141.5C 1218.03,1147.47 1212.7,1153.14 1207,1158.5C 1206.21,1159.74 1205.71,1161.08 1205.5,1162.5C 1204.51,1167.31 1204.18,1172.31 1204.5,1177.5C 1202.83,1177.5 1201.17,1177.5 1199.5,1177.5C 1194.82,1177.33 1190.15,1177.5 1185.5,1178C 1181.11,1179.61 1178.77,1182.77 1178.5,1187.5C 1178.13,1192.09 1177.13,1196.43 1175.5,1200.5C 1174.08,1200.29 1172.74,1199.79 1171.5,1199C 1167.83,1194.67 1164.17,1190.33 1160.5,1186C 1158.47,1184.99 1156.3,1184.49 1154,1184.5C 1144.37,1186.08 1134.87,1188.24 1125.5,1191C 1122.67,1192.25 1120,1193.75 1117.5,1195.5C 1118.56,1198.1 1118.73,1200.77 1118,1203.5C 1113.84,1204.72 1109.68,1204.55 1105.5,1203C 1095.32,1196.41 1084.32,1191.74 1072.5,1189C 1064.73,1187.79 1057.23,1188.62 1050,1191.5C 1039.11,1187.77 1027.94,1185.27 1016.5,1184C 998.516,1182.67 980.516,1182.33 962.5,1183C 945.439,1184.36 928.439,1186.19 911.5,1188.5C 911.827,1183.79 911.493,1179.12 910.5,1174.5C 908.064,1178.08 904.73,1179.25 900.5,1178C 893.505,1172.83 886.172,1168.17 878.5,1164C 861.833,1155.33 845.167,1146.67 828.5,1138C 805.162,1138.76 784.829,1131.42 767.5,1116C 764.167,1114.67 760.833,1113.33 757.5,1112C 745.203,1110.82 732.87,1110.16 720.5,1110C 698.059,1103.56 682.559,1089.4 674,1067.5C 670.237,1057.45 667.571,1047.12 666,1036.5C 663.741,1027.07 657.908,1021.73 648.5,1020.5C 642.757,1000.01 635.59,980.009 627,960.5C 612.611,928.666 598.611,896.666 585,864.5C 581.481,852.038 580.648,839.371 582.5,826.5C 585.937,828.078 589.104,827.745 592,825.5C 593.504,821.961 593.837,818.295 593,814.5C 590.047,797.022 585.381,780.022 579,763.5C 571.494,745.656 563.327,728.156 554.5,711C 559.233,679.338 564.733,647.838 571,616.5C 576.912,592.677 587.578,571.343 603,552.5C 622.025,534.474 640.692,516.141 659,497.5C 661.503,494.498 663.503,491.165 665,487.5C 667.355,478.768 670.688,470.435 675,462.5C 701.289,434.873 728.789,408.706 757.5,384C 761.547,381.128 766.047,379.962 771,380.5C 782.155,382.193 793.322,382.526 804.5,381.5C 811.086,361.749 824.419,348.916 844.5,343C 851.838,342.89 859.172,342.89 866.5,343C 870.844,340.829 874.844,338.163 878.5,335C 884.531,328.634 890.864,322.634 897.5,317C 900.379,316.043 902.879,316.543 905,318.5C 904.681,323.859 904.848,329.192 905.5,334.5C 915.52,327.335 926.187,321.168 937.5,316C 955.764,308.245 974.264,301.078 993,294.5C 995.706,295.89 998.539,297.056 1001.5,298C 1007.22,302.721 1013.22,307.054 1019.5,311C 1022.56,311.741 1025.56,311.575 1028.5,310.5C 1029.66,317.811 1029.83,325.144 1029,332.5C 1027.57,337.598 1024.4,341.098 1019.5,343C 966.124,339.715 915.791,350.382 868.5,375C 837.671,392.244 807.338,410.244 777.5,429C 746.333,456.167 717.167,485.333 690,516.5C 665.077,548.024 649.077,583.691 642,623.5C 637.667,662.162 633.334,700.829 629,739.5C 625.939,746.621 622.606,753.621 619,760.5C 618.137,763.269 617.637,766.102 617.5,769C 621.181,791.097 624.014,813.263 626,835.5C 618.26,832.219 614.593,834.886 615,843.5C 615.936,848.738 618.77,852.404 623.5,854.5C 625.747,853.594 627.747,852.261 629.5,850.5C 629.833,850.833 630.167,851.167 630.5,851.5C 639.042,871.957 647.875,892.29 657,912.5C 661.95,919.784 667.283,926.784 673,933.5C 690.138,951.638 707.638,969.472 725.5,987C 754.135,1013.3 782.469,1039.97 810.5,1067C 817.054,1067.56 823.388,1066.56 829.5,1064C 831.976,1062.69 833.976,1060.86 835.5,1058.5C 836.721,1066.5 833.388,1072 825.5,1075C 858.57,1096.35 894.904,1106.35 934.5,1105C 960.395,1108.68 986.061,1113.51 1011.5,1119.5C 1030.55,1114.76 1049.89,1111.93 1069.5,1111C 1070.83,1110.33 1072.17,1109.67 1073.5,1109C 1077.06,1104.94 1081.06,1101.44 1085.5,1098.5C 1086.56,1094.22 1087.4,1089.88 1088,1085.5C 1088.96,1086.58 1089.79,1087.75 1090.5,1089C 1091.45,1089.62 1092.28,1089.45 1093,1088.5C 1093.11,1083.97 1092.45,1079.64 1091,1075.5C 1096.1,1080.6 1100.43,1086.26 1104,1092.5C 1105.43,1089.07 1107.6,1086.24 1110.5,1084C 1111.64,1083.25 1112.64,1083.42 1113.5,1084.5C 1114.1,1085.79 1114.6,1087.13 1115,1088.5C 1115.47,1083.89 1116.3,1079.39 1117.5,1075C 1118.45,1074.38 1119.28,1074.55 1120,1075.5C 1120.91,1077.66 1122.08,1079.66 1123.5,1081.5C 1125.59,1078.44 1127.59,1075.27 1129.5,1072C 1134.83,1071.33 1140.17,1071.33 1145.5,1072C 1142.93,1080.09 1145.59,1082.76 1153.5,1080C 1156.98,1077.35 1160.31,1074.52 1163.5,1071.5C 1169.03,1081.33 1176.7,1083.17 1186.5,1077C 1243.86,1039.4 1299.36,999.238 1353,956.5C 1353.33,960.5 1353.67,964.5 1354,968.5C 1355.34,962.981 1357.17,957.648 1359.5,952.5C 1363.08,954.877 1366.75,955.043 1370.5,953C 1380.16,936.674 1392.66,922.841 1408,911.5C 1389.01,967.159 1360.01,1016.83 1321,1060.5C 1319.49,1064.7 1318.49,1069.03 1318,1073.5C 1316.66,1079.38 1313.16,1083.22 1307.5,1085C 1301.5,1085.33 1295.5,1085.67 1289.5,1086C 1282.46,1088.09 1280.79,1092.26 1284.5,1098.5C 1284.17,1098.83 1283.83,1099.17 1283.5,1099.5C 1278.47,1095.74 1272.8,1094.58 1266.5,1096C 1261.11,1097.79 1255.94,1099.95 1251,1102.5C 1252.68,1107.22 1255.68,1111.22 1260,1114.5C 1262.07,1117.97 1263.57,1121.64 1264.5,1125.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 1328.5,509.5 C 1328.5,503.833 1328.5,498.167 1328.5,492.5C 1327.21,492.263 1326.21,492.596 1325.5,493.5C 1319.9,496.798 1313.9,499.298 1307.5,501C 1304.37,501.79 1301.37,501.457 1298.5,500C 1268.17,478.333 1237.83,456.667 1207.5,435C 1184.63,419.145 1160.96,404.478 1136.5,391C 1115.92,391.107 1096.92,385.773 1079.5,375C 1072.51,370.346 1067.34,364.179 1064,356.5C 1062.31,345.721 1066.47,338.221 1076.5,334C 1084.8,332.71 1093.13,332.377 1101.5,333C 1103.46,333.931 1105.46,334.764 1107.5,335.5C 1109.98,331.19 1113.31,327.69 1117.5,325C 1195.27,319.253 1261.44,344.086 1316,399.5C 1319,403.167 1322,406.833 1325,410.5C 1355,458.5 1385,506.5 1415,554.5C 1417.34,575.875 1420.01,597.209 1423,618.5C 1424.75,637.127 1425.59,655.793 1425.5,674.5C 1427.31,674.509 1428.98,674.009 1430.5,673C 1433.12,668.717 1436.12,664.717 1439.5,661C 1440.88,659.759 1442.21,659.592 1443.5,660.5C 1436.02,678.761 1431.18,697.761 1429,717.5C 1427.45,729.474 1426.11,741.474 1425,753.5C 1423.09,745.955 1422.26,738.289 1422.5,730.5C 1423.04,716.056 1424.21,701.722 1426,687.5C 1423.42,693.057 1419.59,694.39 1414.5,691.5C 1413.14,686.199 1411.97,680.866 1411,675.5C 1392.59,661.189 1379.42,643.023 1371.5,621C 1381.1,596.472 1374.77,577.472 1352.5,564C 1348.25,560.419 1344.75,556.252 1342,551.5C 1335.59,538.107 1331.09,524.107 1328.5,509.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#987abd"
                d="M 1325.5,493.5 C 1326.21,492.596 1327.21,492.263 1328.5,492.5C 1328.5,498.167 1328.5,503.833 1328.5,509.5C 1328.14,503.923 1327.14,498.59 1325.5,493.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="transparent"
                strokeWidth="20px"
                stroke="#fff"
                d="M 890.5,641.5 C 926.788,638.537 957.954,649.537 984,674.5C 1009.2,704.147 1017.54,738.147 1009,776.5C 995.61,823.215 964.777,850.048 916.5,857C 879.67,860.505 848.504,849.005 823,822.5C 800.2,794.016 792.2,761.683 799,725.5C 811.201,677.462 841.701,649.462 890.5,641.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#fff"
                d="M 738.5,644.5 C 745.166,643.251 749.999,645.584 753,651.5C 753.667,716.5 753.667,781.5 753,846.5C 749.857,854.314 744.357,856.481 736.5,853C 734.513,851.681 733.346,849.848 733,847.5C 732.333,781.833 732.333,716.167 733,650.5C 734.36,647.977 736.193,645.977 738.5,644.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#fff"
                d="M 1245.5,846.5 C 1245.83,794.829 1245.5,743.162 1244.5,691.5C 1243.7,691.957 1243.37,692.624 1243.5,693.5C 1218.69,745.115 1193.36,796.449 1167.5,847.5C 1161.78,850.64 1156.61,849.973 1152,845.5C 1126.88,795.602 1102.05,745.602 1077.5,695.5C 1077.44,694.957 1077.11,694.624 1076.5,694.5C 1075.5,745.162 1075.17,795.829 1075.5,846.5C 1074.29,851.703 1070.95,854.37 1065.5,854.5C 1060.82,854.241 1057.65,851.907 1056,847.5C 1055.33,781.833 1055.33,716.167 1056,650.5C 1057.8,646.349 1060.97,644.349 1065.5,644.5C 1068.68,644.509 1071.52,645.509 1074,647.5C 1102.91,704.992 1132.08,762.326 1161.5,819.5C 1189.92,762.988 1218.09,706.321 1246,649.5C 1251.67,643.213 1257.67,642.88 1264,648.5C 1265.66,714.751 1265.99,781.085 1265,847.5C 1261.66,854.248 1256.49,856.081 1249.5,853C 1247.08,851.429 1245.74,849.263 1245.5,846.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#63438b"
                d="M 1245.5,846.5 C 1244.83,795.5 1244.17,744.5 1243.5,693.5C 1243.37,692.624 1243.7,691.957 1244.5,691.5C 1245.5,743.162 1245.83,794.829 1245.5,846.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#63438b"
                d="M 1077.5,695.5 C 1076.83,745.833 1076.17,796.167 1075.5,846.5C 1075.17,795.829 1075.5,745.162 1076.5,694.5C 1077.11,694.624 1077.44,694.957 1077.5,695.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#63438b"
                d="M 624.5,872.5 C 627.263,872.744 629.429,874.077 631,876.5C 635.509,887.078 640.176,897.412 645,907.5C 640.625,905.812 636.958,903.145 634,899.5C 633,894.833 632,890.167 631,885.5C 628.807,881.114 626.64,876.78 624.5,872.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#63438b"
                d="M 613.5,873.5 C 615.911,873.137 617.411,874.137 618,876.5C 619.98,881.755 621.314,887.088 622,892.5C 618.487,887.657 614.987,882.824 611.5,878C 611.519,876.167 612.185,874.667 613.5,873.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#63438b"
                d="M 1264.5,1125.5 C 1265.8,1127.69 1265.8,1130.03 1264.5,1132.5C 1263.89,1132.38 1263.56,1132.04 1263.5,1131.5C 1264.46,1129.74 1264.79,1127.74 1264.5,1125.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#63438b"
                d="M 1205.5,1162.5 C 1205.5,1167.83 1205.5,1173.17 1205.5,1178.5C 1203.26,1178.79 1201.26,1178.46 1199.5,1177.5C 1201.17,1177.5 1202.83,1177.5 1204.5,1177.5C 1204.18,1172.31 1204.51,1167.31 1205.5,1162.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#63438b"
                d="M 1178.5,1187.5 C 1178.5,1192.17 1178.5,1196.83 1178.5,1201.5C 1177.21,1201.74 1176.21,1201.4 1175.5,1200.5C 1177.13,1196.43 1178.13,1192.09 1178.5,1187.5 Z"
              />
            </g>
          </svg>
        );
      case "light-logo":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100px"
            height="75px"
            viewBox="554.5 294.5 889 909.803955078125"
          >
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 1264.5,1125.5 C 1264.79,1127.74 1264.46,1129.74 1263.5,1131.5C 1259.34,1127.17 1255.34,1122.67 1251.5,1118C 1250.09,1117.68 1248.76,1118.02 1247.5,1119C 1238.73,1125.76 1230.57,1133.26 1223,1141.5C 1218.03,1147.47 1212.7,1153.14 1207,1158.5C 1206.21,1159.74 1205.71,1161.08 1205.5,1162.5C 1204.51,1167.31 1204.18,1172.31 1204.5,1177.5C 1202.83,1177.5 1201.17,1177.5 1199.5,1177.5C 1194.82,1177.33 1190.15,1177.5 1185.5,1178C 1181.11,1179.61 1178.77,1182.77 1178.5,1187.5C 1178.13,1192.09 1177.13,1196.43 1175.5,1200.5C 1174.08,1200.29 1172.74,1199.79 1171.5,1199C 1167.83,1194.67 1164.17,1190.33 1160.5,1186C 1158.47,1184.99 1156.3,1184.49 1154,1184.5C 1144.37,1186.08 1134.87,1188.24 1125.5,1191C 1122.67,1192.25 1120,1193.75 1117.5,1195.5C 1118.56,1198.1 1118.73,1200.77 1118,1203.5C 1113.84,1204.72 1109.68,1204.55 1105.5,1203C 1095.32,1196.41 1084.32,1191.74 1072.5,1189C 1064.73,1187.79 1057.23,1188.62 1050,1191.5C 1039.11,1187.77 1027.94,1185.27 1016.5,1184C 998.516,1182.67 980.516,1182.33 962.5,1183C 945.439,1184.36 928.439,1186.19 911.5,1188.5C 911.827,1183.79 911.493,1179.12 910.5,1174.5C 908.064,1178.08 904.73,1179.25 900.5,1178C 893.505,1172.83 886.172,1168.17 878.5,1164C 861.833,1155.33 845.167,1146.67 828.5,1138C 805.162,1138.76 784.829,1131.42 767.5,1116C 764.167,1114.67 760.833,1113.33 757.5,1112C 745.203,1110.82 732.87,1110.16 720.5,1110C 698.059,1103.56 682.559,1089.4 674,1067.5C 670.237,1057.45 667.571,1047.12 666,1036.5C 663.741,1027.07 657.908,1021.73 648.5,1020.5C 642.757,1000.01 635.59,980.009 627,960.5C 612.611,928.666 598.611,896.666 585,864.5C 581.481,852.038 580.648,839.371 582.5,826.5C 585.937,828.078 589.104,827.745 592,825.5C 593.504,821.961 593.837,818.295 593,814.5C 590.047,797.022 585.381,780.022 579,763.5C 571.494,745.656 563.327,728.156 554.5,711C 559.233,679.338 564.733,647.838 571,616.5C 576.912,592.677 587.578,571.343 603,552.5C 622.025,534.474 640.692,516.141 659,497.5C 661.503,494.498 663.503,491.165 665,487.5C 667.355,478.768 670.688,470.435 675,462.5C 701.289,434.873 728.789,408.706 757.5,384C 761.547,381.128 766.047,379.962 771,380.5C 782.155,382.193 793.322,382.526 804.5,381.5C 811.086,361.749 824.419,348.916 844.5,343C 851.838,342.89 859.172,342.89 866.5,343C 870.844,340.829 874.844,338.163 878.5,335C 884.531,328.634 890.864,322.634 897.5,317C 900.379,316.043 902.879,316.543 905,318.5C 904.681,323.859 904.848,329.192 905.5,334.5C 915.52,327.335 926.187,321.168 937.5,316C 955.764,308.245 974.264,301.078 993,294.5C 995.706,295.89 998.539,297.056 1001.5,298C 1007.22,302.721 1013.22,307.054 1019.5,311C 1022.56,311.741 1025.56,311.575 1028.5,310.5C 1029.66,317.811 1029.83,325.144 1029,332.5C 1027.57,337.598 1024.4,341.098 1019.5,343C 966.124,339.715 915.791,350.382 868.5,375C 837.671,392.244 807.338,410.244 777.5,429C 746.333,456.167 717.167,485.333 690,516.5C 665.077,548.024 649.077,583.691 642,623.5C 637.667,662.162 633.334,700.829 629,739.5C 625.939,746.621 622.606,753.621 619,760.5C 618.137,763.269 617.637,766.102 617.5,769C 621.181,791.097 624.014,813.263 626,835.5C 618.26,832.219 614.593,834.886 615,843.5C 615.936,848.738 618.77,852.404 623.5,854.5C 625.747,853.594 627.747,852.261 629.5,850.5C 629.833,850.833 630.167,851.167 630.5,851.5C 639.042,871.957 647.875,892.29 657,912.5C 661.95,919.784 667.283,926.784 673,933.5C 690.138,951.638 707.638,969.472 725.5,987C 754.135,1013.3 782.469,1039.97 810.5,1067C 817.054,1067.56 823.388,1066.56 829.5,1064C 831.976,1062.69 833.976,1060.86 835.5,1058.5C 836.721,1066.5 833.388,1072 825.5,1075C 858.57,1096.35 894.904,1106.35 934.5,1105C 960.395,1108.68 986.061,1113.51 1011.5,1119.5C 1030.55,1114.76 1049.89,1111.93 1069.5,1111C 1070.83,1110.33 1072.17,1109.67 1073.5,1109C 1077.06,1104.94 1081.06,1101.44 1085.5,1098.5C 1086.56,1094.22 1087.4,1089.88 1088,1085.5C 1088.96,1086.58 1089.79,1087.75 1090.5,1089C 1091.45,1089.62 1092.28,1089.45 1093,1088.5C 1093.11,1083.97 1092.45,1079.64 1091,1075.5C 1096.1,1080.6 1100.43,1086.26 1104,1092.5C 1105.43,1089.07 1107.6,1086.24 1110.5,1084C 1111.64,1083.25 1112.64,1083.42 1113.5,1084.5C 1114.1,1085.79 1114.6,1087.13 1115,1088.5C 1115.47,1083.89 1116.3,1079.39 1117.5,1075C 1118.45,1074.38 1119.28,1074.55 1120,1075.5C 1120.91,1077.66 1122.08,1079.66 1123.5,1081.5C 1125.59,1078.44 1127.59,1075.27 1129.5,1072C 1134.83,1071.33 1140.17,1071.33 1145.5,1072C 1142.93,1080.09 1145.59,1082.76 1153.5,1080C 1156.98,1077.35 1160.31,1074.52 1163.5,1071.5C 1169.03,1081.33 1176.7,1083.17 1186.5,1077C 1243.86,1039.4 1299.36,999.238 1353,956.5C 1353.33,960.5 1353.67,964.5 1354,968.5C 1355.34,962.981 1357.17,957.648 1359.5,952.5C 1363.08,954.877 1366.75,955.043 1370.5,953C 1380.16,936.674 1392.66,922.841 1408,911.5C 1389.01,967.159 1360.01,1016.83 1321,1060.5C 1319.49,1064.7 1318.49,1069.03 1318,1073.5C 1316.66,1079.38 1313.16,1083.22 1307.5,1085C 1301.5,1085.33 1295.5,1085.67 1289.5,1086C 1282.46,1088.09 1280.79,1092.26 1284.5,1098.5C 1284.17,1098.83 1283.83,1099.17 1283.5,1099.5C 1278.47,1095.74 1272.8,1094.58 1266.5,1096C 1261.11,1097.79 1255.94,1099.95 1251,1102.5C 1252.68,1107.22 1255.68,1111.22 1260,1114.5C 1262.07,1117.97 1263.57,1121.64 1264.5,1125.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#69E6A6"
                d="M 1328.5,509.5 C 1328.5,503.833 1328.5,498.167 1328.5,492.5C 1327.21,492.263 1326.21,492.596 1325.5,493.5C 1319.9,496.798 1313.9,499.298 1307.5,501C 1304.37,501.79 1301.37,501.457 1298.5,500C 1268.17,478.333 1237.83,456.667 1207.5,435C 1184.63,419.145 1160.96,404.478 1136.5,391C 1115.92,391.107 1096.92,385.773 1079.5,375C 1072.51,370.346 1067.34,364.179 1064,356.5C 1062.31,345.721 1066.47,338.221 1076.5,334C 1084.8,332.71 1093.13,332.377 1101.5,333C 1103.46,333.931 1105.46,334.764 1107.5,335.5C 1109.98,331.19 1113.31,327.69 1117.5,325C 1195.27,319.253 1261.44,344.086 1316,399.5C 1319,403.167 1322,406.833 1325,410.5C 1355,458.5 1385,506.5 1415,554.5C 1417.34,575.875 1420.01,597.209 1423,618.5C 1424.75,637.127 1425.59,655.793 1425.5,674.5C 1427.31,674.509 1428.98,674.009 1430.5,673C 1433.12,668.717 1436.12,664.717 1439.5,661C 1440.88,659.759 1442.21,659.592 1443.5,660.5C 1436.02,678.761 1431.18,697.761 1429,717.5C 1427.45,729.474 1426.11,741.474 1425,753.5C 1423.09,745.955 1422.26,738.289 1422.5,730.5C 1423.04,716.056 1424.21,701.722 1426,687.5C 1423.42,693.057 1419.59,694.39 1414.5,691.5C 1413.14,686.199 1411.97,680.866 1411,675.5C 1392.59,661.189 1379.42,643.023 1371.5,621C 1381.1,596.472 1374.77,577.472 1352.5,564C 1348.25,560.419 1344.75,556.252 1342,551.5C 1335.59,538.107 1331.09,524.107 1328.5,509.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#69E6A6"
                d="M 1325.5,493.5 C 1326.21,492.596 1327.21,492.263 1328.5,492.5C 1328.5,498.167 1328.5,503.833 1328.5,509.5C 1328.14,503.923 1327.14,498.59 1325.5,493.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="transparent"
                strokeWidth="20px"
                stroke="#0A2640"
                d="M 890.5,641.5 C 926.788,638.537 957.954,649.537 984,674.5C 1009.2,704.147 1017.54,738.147 1009,776.5C 995.61,823.215 964.777,850.048 916.5,857C 879.67,860.505 848.504,849.005 823,822.5C 800.2,794.016 792.2,761.683 799,725.5C 811.201,677.462 841.701,649.462 890.5,641.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0A2640"
                d="M 738.5,644.5 C 745.166,643.251 749.999,645.584 753,651.5C 753.667,716.5 753.667,781.5 753,846.5C 749.857,854.314 744.357,856.481 736.5,853C 734.513,851.681 733.346,849.848 733,847.5C 732.333,781.833 732.333,716.167 733,650.5C 734.36,647.977 736.193,645.977 738.5,644.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0A2640"
                d="M 1245.5,846.5 C 1245.83,794.829 1245.5,743.162 1244.5,691.5C 1243.7,691.957 1243.37,692.624 1243.5,693.5C 1218.69,745.115 1193.36,796.449 1167.5,847.5C 1161.78,850.64 1156.61,849.973 1152,845.5C 1126.88,795.602 1102.05,745.602 1077.5,695.5C 1077.44,694.957 1077.11,694.624 1076.5,694.5C 1075.5,745.162 1075.17,795.829 1075.5,846.5C 1074.29,851.703 1070.95,854.37 1065.5,854.5C 1060.82,854.241 1057.65,851.907 1056,847.5C 1055.33,781.833 1055.33,716.167 1056,650.5C 1057.8,646.349 1060.97,644.349 1065.5,644.5C 1068.68,644.509 1071.52,645.509 1074,647.5C 1102.91,704.992 1132.08,762.326 1161.5,819.5C 1189.92,762.988 1218.09,706.321 1246,649.5C 1251.67,643.213 1257.67,642.88 1264,648.5C 1265.66,714.751 1265.99,781.085 1265,847.5C 1261.66,854.248 1256.49,856.081 1249.5,853C 1247.08,851.429 1245.74,849.263 1245.5,846.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 1245.5,846.5 C 1244.83,795.5 1244.17,744.5 1243.5,693.5C 1243.37,692.624 1243.7,691.957 1244.5,691.5C 1245.5,743.162 1245.83,794.829 1245.5,846.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 1077.5,695.5 C 1076.83,745.833 1076.17,796.167 1075.5,846.5C 1075.17,795.829 1075.5,745.162 1076.5,694.5C 1077.11,694.624 1077.44,694.957 1077.5,695.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 624.5,872.5 C 627.263,872.744 629.429,874.077 631,876.5C 635.509,887.078 640.176,897.412 645,907.5C 640.625,905.812 636.958,903.145 634,899.5C 633,894.833 632,890.167 631,885.5C 628.807,881.114 626.64,876.78 624.5,872.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 613.5,873.5 C 615.911,873.137 617.411,874.137 618,876.5C 619.98,881.755 621.314,887.088 622,892.5C 618.487,887.657 614.987,882.824 611.5,878C 611.519,876.167 612.185,874.667 613.5,873.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 1264.5,1125.5 C 1265.8,1127.69 1265.8,1130.03 1264.5,1132.5C 1263.89,1132.38 1263.56,1132.04 1263.5,1131.5C 1264.46,1129.74 1264.79,1127.74 1264.5,1125.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 1205.5,1162.5 C 1205.5,1167.83 1205.5,1173.17 1205.5,1178.5C 1203.26,1178.79 1201.26,1178.46 1199.5,1177.5C 1201.17,1177.5 1202.83,1177.5 1204.5,1177.5C 1204.18,1172.31 1204.51,1167.31 1205.5,1162.5 Z"
              />
            </g>
            <g>
              <path
                style={{ opacity: 1 }}
                fill="#0DBBFC"
                d="M 1178.5,1187.5 C 1178.5,1192.17 1178.5,1196.83 1178.5,1201.5C 1177.21,1201.74 1176.21,1201.4 1175.5,1200.5C 1177.13,1196.43 1178.13,1192.09 1178.5,1187.5 Z"
              />
            </g>
          </svg>
        );
      case "sun":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_62_578)">
              <path
                className={strokeClass}
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M12 1V3"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M12 21V23"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M4.22 4.21997L5.64 5.63997"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M18.36 18.3601L19.78 19.7801"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M1 12H3"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M21 12H23"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M4.22 19.7801L5.64 18.3601"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={strokeClass}
                d="M18.36 5.63997L19.78 4.21997"
                stroke="#0A2640"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_578">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );

      default:
        break;
    }
  };

  return <>{generateSVG(name)}</>;
};

export default SVGGenerate;
