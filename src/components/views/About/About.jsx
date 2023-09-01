import style from './about.module.css'
import yo from '../../../assets/DSC_5678.jpg'

function About() {
    return (
        <div className={style.about} >
            <div className={style.containerImg} >
            <img src={yo} className={style.img}></img>
            </div>
            <div className={style.aboutMe} >
            <h1>About Me</h1>
            <p> My name is Martin Garcia Hervas, im from Buenos Aires, Argentina. Currently, I live in Pilar.</p>
            <br></br>
            <p> Im 25 years old and since I was a child, I've been interested in computing. After finishing school, I decided to study Architecture, but after three years, I quit because it wasn't what I was looking for. Regardless, I learned lots of skills that are very useful, like 3D modeling, or photoshop.
            </p>
            <br></br>
            <p> After dropping the career, I decided to start working, so my first job was an administrative one. Again I learn lots of skills for example excel, but as soon as I could, I started another career, which didn't last long. After my second career failure I decided to focus on working on something I was good at, so I started working in a construction company. I spent almost three years working there, but, as any job or thing that doesn't make you feel full, I needed something else.</p>
            <br></br>
            <p> At the beginning of 2023, I started looking for that thing. After some days, even weeks, computing come to my mind. I've always been "good" at it, so why not?. From that moment I started looking for courses which could help me. So my first aproach to web development, was at freeCodeCamp. I learned a lot there, but I wanted more. So Henry appeared in my radar, and I decided to start my journey.</p>
            </div>
        </div>
    )
}

export default About;