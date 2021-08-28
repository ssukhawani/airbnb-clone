import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({exploreData, cardData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
        <section className="pt-10">
          <h2 className="text-3xl md:text-4xl font-semibold pb-5">
            Explore Nearby
          </h2>

          {/* Pull the data from server - API calls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            exploreData?.map(({img,location,distance},index)=>(
              <SmallCard
                key={index+location}
                img={img}
                location={location}
                distance={distance}
              />
            ))
          }
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl md:text-4xl font-semibold py-5">
            Live Anywhere
          </h2>

          <div className="flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3">
            {
              cardData?.map(({img,title},index)=>(
                <MediumCard
                  key={title+index}
                  img={img}
                  title={title}
                />
              ))
            }
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer/>
    </div>
  );
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp").then(res=>res.json());

  const cardData = await fetch("https://links.papareact.com/zp1").then(res=>res.json());

  return {
    props:{
      exploreData,
      cardData
    }
  }
}
