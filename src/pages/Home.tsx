const Home = () => {
  return (
    <>
      <h2 className="text-deneme mb-3 text-center text-3xl font-semibold leading-relaxed dark:text-white">Tailwind Nedir?</h2>
      <p className="mb-3">
        Tek bir satır CSS kodu yazmadan ve oluşturduğumuz HTML sayfasından ayrılmadan kolay ve hızlı bir şekilde kendimize özel tasarımlar ortaya
        çıkarabildiğimiz bir CSS framework’üdür.
      </p>
      <p className="mb-3">
        Bir web sitesi oluşturduğunuzu düşünün. Saf HTML ya da herhangi bir Javascript Framework'ü farketmeksizin genelde HTML sayfamıza ya da genel
        adıyla web uygulamamıza style.css gibi bir isme sahip bir ya da birden çok CSS dosyası dahil ederiz.
      </p>
      <p className="mb-3">
        Bu dosyalar içerisinde muhtemelen en az yüzlerce satır CSS kodu yazarız. Ama tailwind, bizi bu durumdan kurtararak, HTML elementlerine sadece
        bazı classlar ekleyerek stil özellikleri verebilmemizi sağlar. Bunu nasıl yaptığına daha sonra geleceğiz.
      </p>
    </>
  );
};

export default Home;
