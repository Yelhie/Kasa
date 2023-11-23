import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({ title, content }) {
    // Utilisation de l'état pour suivre si l'élément est déplié ou replié
    const [isExpanded, setExpanded] = useState(false);

    // Fonction pour basculer l'état (déplié/replié)
    const toggleText = () => {
        setExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`collapse_container ${isExpanded ? 'expanded' : ''}`} >
                <h3 className='collapse_title' onClick={toggleText}>
                    {title}
                    <img src={arrow} />
                </h3>
                <div className='toggle-content' >
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div>
            </div>
        </>
    )
}