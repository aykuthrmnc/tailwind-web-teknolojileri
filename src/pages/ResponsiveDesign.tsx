const ResponsiveDesign = () => {
  return (
    <>
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-3xl ">
        <div className="animate-pulse md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="/hoverfocus/logo.png" alt="Modern building architecture"></img>
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
      <div className="content-center">
        <center>
          <img
            className="mt-16 h-20 w-full animate-bounce object-cover md:h-full md:w-80"
            src="/hoverfocus/uzay.jpg"
            alt="Modern building architecture"
          />
        </center>
      </div>
    </>
  );
};

export default ResponsiveDesign;
