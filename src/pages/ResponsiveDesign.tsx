const ResponsiveDesign = () => {
  return (
    <>
      <div className="content-center">
        <center className="mt-16 animate-bounce" title="Modern building architecture">
          <svg
            className="dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0,512) scale(0.1,-0.1)" fill="currentColor" stroke="none">
              <path
                d="M251 4900 c-89 -19 -182 -96 -223 -185 -18 -39 -23 -68 -23 -130 0 -144 -67 -69 1077 -1211 1112 -1110 1067 -1069 1243 -1131 74 -26 91 -28 235
                -28 144 0 161 2 235 28 176 62 132 21 1237 1125 736 735 1024 1029 1045 1066
                25 46 28 60 28 146 0 80 -4 102 -23 138 -80 150 -246 218 -397 162 -58 -22
                -94 -56 -1065 -1025 -779 -778 -1012 -1004 -1036 -1009 -17 -4 -44 -2 -60 4
                -17 7 -439 421 -1029 1010 -792 791 -1009 1003 -1045 1019 -55 24 -140 33
                -199 21z"
              />
              <path
                d="M4735 2871 c-86 -22 -115 -49 -985 -916 -544 -542 -892 -882 -920
                -898 -84 -47 -167 -69 -265 -69 -102 0 -152 11 -245 55 -60 28 -134 99 -940
                902 -697 695 -885 877 -925 896 -72 35 -199 34 -270 0 -63 -32 -124 -92 -155
                -156 -20 -40 -24 -66 -25 -130 0 -153 -57 -88 928 -1071 793 -792 881 -877
                973 -938 119 -78 228 -127 362 -164 88 -23 114 -26 287 -26 165 -1 201 2 278
                22 166 42 306 109 442 210 33 25 450 435 927 911 977 976 918 907 918 1061 0
                69 -5 95 -24 135 -30 63 -96 128 -160 156 -53 23 -152 33 -201 20z"
              />
            </g>
          </svg>
        </center>
      </div>
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-3xl ">
        <div className="animate-pulse md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="/responsive/uzay.jpg" alt="Modern building architecture" />
          </div>
          <div className="p-8">
            <a href="https://www.nasa.gov/webbfirstimages" className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">
              James Webb Uzay Teleskobu'ndan İlk Görüntüler
            </a>
            <p className="mt-2 text-slate-500">
              James Webb'in yakın kızılötesi kamerasıyla çekilen Carina Nebulası'nda daha önce gözlemlenemeyen yıldızların doğuşu görüntülendi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveDesign;
