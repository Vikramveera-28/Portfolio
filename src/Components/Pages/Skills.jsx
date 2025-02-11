import React from 'react'
import HtmlImage from '../../assets/Image/Icons/Html.png';
import CssImage from '../../assets/Image/Icons/Css.png';
import JsImage from '../../assets/Image/Icons/Js.png';
import BootstrapImage from '../../assets/Image/Icons/Bootstrap.png';
import ReactImage from '../../assets/Image/Icons/React.png';
import MuiImage from '../../assets/Image/Icons/MUI.png';
import BootstrapReactImage from '../../assets/Image/Icons/BootstrapReact.png';

export const Skills = () => {
  const skills = [
      {
        'Frondend_Skills' : [
          {
            id : 1,
            name: 'HTML',
            image: HtmlImage
          },
          {
            id : 2,
            name: 'CSS',
            image: CssImage
          },
          {
            id : 3,
            name: 'JavaScript',
            image: JsImage
          },
          {
            id : 4,
            name: 'Boostrap',
            image: BootstrapImage
          },
          {
            id : 5,
            name: 'React',
            image: ReactImage
          },
          {
            id : 6,
            name: 'Material UI',
            image: MuiImage
          },
          {
            id : 7,
            name: 'React Bootstrap',
            image: BootstrapReactImage
          }
        ]
      },
      {
        'Backend_Skills' : [
          {
            id : 1,
            name: 'Python',
            image: null
          },
          {
            id : 2,
            name: 'Django',
            image: null
          },
          {
            id : 3,
            name: 'MySql',
            image: null
          },
          {
            id : 4,
            name: 'Json-Server',
            image: null
          }
        ]
      }
  ]
  return (
    <section className="container-fluid page-3 bg-dark text-light pt-2" id="skills">
      <div className="container">
          <div className="row">
              <h1 className="display-4 text-center col my-5 text-danger">My Skills</h1>
          </div>
          <div className="row my-2">
              <div className="col-12 my-5">
                  <h1 className="h1 text-warning skill-opacity">Skills in Full Stact Developer</h1>
                  <p className="fs-3 skill-opacity">Skilled full strack developer with expertise in frontend and backend techologies, delivering dynamic web applications and scalable solutions. </p>
              </div>
              {skills.map((category, index) => {
                const [key, value] = Object.entries(category)[0];
                return(
                  <div key={index} className="row col-12 my-5 text-center">
                  <h1 className="display-6 col-12 lead text-warning mb-5">{key}</h1>
                  {value.map((skill) => (
                    <div key={skill.id} className="col-12 col-sm-6 col-md-4 skill-box">
                      <img src={skill.image} className='my-3' width="90px" height="90px" alt={skill.name} />
                    </div>
                  ))}
                  </div>
                )
              })}
          </div>
      </div>
  </section>
  )
}
