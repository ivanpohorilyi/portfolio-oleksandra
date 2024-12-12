import './summary.sass';


const Summary = () => {
    return (
        <div className='summary-container'>
            <h1 className='summary-title'>Oleksandra Pohorila</h1>
            <div className='block-1'>
                <p>Architect-designer with many years of experience in interior
                    and exterior design. I hold a bachelor’s degree from the Kyiv National
                    University of Civil Engineering and Architecture and have worked with well-known
                    companies such as Davide Macullo Architects in Switzerland and the INTERICA design
                    studio in Ukraine.</p>
                <p>I specialize in 3D visualization, technical drawing, and comprehensive project development.
                    I work with programs such as ArchiCAD, 3D Max+Vray, AutoCAD, and Photoshop.</p>
                <p>I speak English and some Italian. I currently live in Switzerland and aim
                    to apply my experience and professional knowledge to implement interesting and
                    large-scale projects.</p>
            </div>

            <div className='block-2'>

               <a
                    className='dwnld-link'
                    href="../../../public/files/Pohorila_Oleksandra_CV_2024.pdf"
                    download="Pohorila_Oleksandra_CV_2024.pdf">
                    <span className='summary-btn'>download</span>
                    <a className='open-link'
                    href="../../../public/files/Pohorila_Oleksandra_CV_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    Pohorila Oleksandra CV PDF
                </a>
                </a>

                <a
                    className='dwnld-link'
                    href="../../../public/files/Pohorila_Oleksandra_Recomendation_letter_2024.pdf"
                    download="Pohorila_Oleksandra_Recomendation_letter_2024.pdf">
                   <span className='summary-btn'>download</span>
                    <a className='open-link'
                    href="../../../public/files/Pohorila_Oleksandra_Recomendation_letter_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    Recomendation-letter MACULLO PDf
                </a>
                </a>

                <a
                    className='dwnld-link'
                    href="../../../public/files/Pohorila_Oleksandra_Recomendation_letter_INTERIKA_2024.pdf"
                    download="Pohorila_Oleksandra_Recomendation_letter_INTERIKA_2024.pdf">
                   <span className='summary-btn'>download</span>
                    <a className='open-link'
                    href="../../../public/files/Pohorila_Oleksandra_Recomendation_letter_INTERIKA_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    Recomendation-letter INTERIKA 2024 PDF
                </a>
                </a>

            </div>

            <div className='block-3'>
                <a href="tel:+380504500076">+38 050 45 00 076</a>
                <a href="tel:+41797205284">+41 797 20 52 84</a>
                <a href="mailto:sasha7720@gmail.com">sasha7720@gmail.com</a>
            </div>
        </div>
    )
}

export default Summary;