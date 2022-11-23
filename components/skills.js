import React from "react";
import Skills from "./skills-elems";


function SkillsContainer (){

    return (
        <div className="skills-wrapper">
            <div className="skillName">
                <div className="skills-title">
                    <span>Profile</span>
                </div>
                <div className="skills-discription">
                    <span><p>&nbsp;&nbsp;&nbsp;Driven and motivated, I am interested in IT and everything in its orbit.
                        I  fascinated by web programming, e.g. developing apps and building websites. As this
                        area complements my studies, I am keen to gain more experience in the field. For this reason,
                        I am looking for a company willing to offer me a placement among their developers. In return,
                        I would offer my full commitment, and be a pleasant and friendly addition to your team.
</p></span>
                </div>
            </div>
            <div className="skills-slide-wrapper">
                <div className="skills-title">
                    <span>Profile</span>
                </div>
            <Skills />
            </div>
        </div>
    )
}
export default SkillsContainer






