import Image from 'next/image';

export const TractoRoute = () => {
    return (
        <>
            <div className="year">
                <div className="year__card">
                    <span className="year__title">2023</span>
                    <Image
                        src="/images/routetracto.jpg"
                        alt="tracto"
                        width={400}
                        height={300}
                    />
                </div>
                <div className="year__content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="year">
                <div className="year__card year__card--end">
                    <span className="year__title">2022</span>
                    <Image
                        src="/images/routetracto.jpg"
                        alt="tracto"
                        width={400}
                        height={300}
                    />
                </div>
                <div className="year__content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </>
    )
}
