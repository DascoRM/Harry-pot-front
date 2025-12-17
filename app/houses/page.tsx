import { Card } from "@/components/card";


export default function Page() {
    const houses = [
        {
            title:"Gryffondor",
            imgPath: "",
            color:"gryffondor"
        },
        {
            title:"Serpentard",
            imgPath: "",
            color:"serpentard"
        },
        {
            title:"Serdaigle",
            imgPath: "",
            color:"serdaigle"
        },
        {
            title:"Poufsouffle",
            imgPath: "",
            color:"poufsouffle"
        }
    ]
    return (
        <main>
            <section>
                <div className="flex justify-center">
                    {/* TODO Image ici */}
                    <h1 className="text-3xl md:text-6xl">Le choixpeaux Magique</h1>
                </div>

                <div className="flex justify-center">
                    <blockquote className="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 mx-4 md:mx-10 max-w-md md:max-w-lg">
                        <p className="text-md md:text-lg font-medium">"Rien ne m"échappe, rien ne m'arrête. Le Choipeaux à toujours raison. Mettez-moi sur votre tête, pour connaître votre maison !"</p>
                    </blockquote>
                </div>

                <div>
                    {
                        houses.map((item)=> {
                            return <Card
                                title={item.title}
                                imgPath={item.imgPath}
                                color={item.color}
                                />
                                })
                    }
                </div>
            </section>
        </main>
    );
}