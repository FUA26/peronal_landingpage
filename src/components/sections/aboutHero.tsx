import Image from "../common/NextImage";

const AboutHero = () => {
  return (
    <div className="py-8">
      <p className=" px-6 text-3xl font-semibold">Hi! I am</p>
      <p className=" px-6 text-4xl font-bold text-main">Fatih Ulil Albab</p>
      <div className="flex flex-col md:flex-row ">
        <div className="md:basis-2/3 order-2 md:order-1 p-6 text-foreground ">
          <p className="text-base/relaxed text-foreground text-justify">
            My journey as a software developer began in 2014 when I decided to
            pursue my studies at Brawijaya University with a major in Computer
            Science. Upon delving into software developmenwqwt, particularly web
            development, I developed a strong passion to delve deeper into this
            field.
          </p>
          <p className="text-base/relaxed text-foreground text-justify mt-4">
            My professional career commenced after graduating, precisely in
            2018. It has been an incredible journey, during which I have
            acquired a wealth of knowledge over the past five years. I&rsquo; ve
            traversed numerous projects and roles, each providing valuable
            lessons.
          </p>
          <p className="text-base/relaxed text-foreground text-justify mt-4">
            Throughout my career, I&rsquo;ve taken on roles such as Frontend
            Developer, Fullstack Developer, System Analyst, and Project Manager.
            Each of these roles has contributed uniquely to my skill set and
            provided me with diverse experiences. From refining the user
            experience as a Frontend Developer to overseeing entire projects as
            a Project Manager, I&rsquo;ve embraced the challenges of each
            position.
          </p>
        </div>
        <div className="flex order-1 md:order-2  md:basis-1/3 flex-col h-full justify-start p-6">
          <div className="relative m-auto  aspect-[4/3] w-full ">
            <Image
              className="rounded-2xl"
              src="/images/FUA-Profile-Main.webp"
              alt="Profile Image"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
