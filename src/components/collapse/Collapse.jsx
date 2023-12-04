import './collapse.scss'
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';
import { useState } from 'react';

export default function Collapse({ title, content }) {
    // Utilisation de l'état pour suivre si l'élément est déplié ou replié
    const [isExpanded, setExpanded] = useState(false);

    // Fonction pour basculer l'état (déplié/replié)
    function toggleTitle() {
        setExpanded(!isExpanded);
    }

    return (
        <>
            {/* On ajoute expanded on nom de class (équivalent d'un .active) */}
            <div className='collapse_container' >
                <h3 className='collapse_title' onClick={toggleTitle}>
                    {title}
                    <img src={isExpanded ? arrowUp : arrowDown} alt="Arrow" />
                </h3>
                <div className={`toggle_text_container ${isExpanded ? 'expanded' : ''}`} >
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


