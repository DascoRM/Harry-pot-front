
import Image
 from "next/image"
export const Card = ({
    title,
    imgPath,
    color
}: {
    title: string
    imgPath: string
    color: string
}) => {

    return (
        <div>
            <div className={`bg-${color} flex flex-col items-center jusstify-center`}>
                <Image
                    src={imgPath}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <h3>{title}</h3>
            </div>
        </div>
    )
}