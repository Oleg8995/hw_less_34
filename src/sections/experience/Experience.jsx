import "./Experience.css"

export const Experience = () => {
    return (
        <div>

    
        <div>
            <div className="experience_company_block">
                <h3 className="main_content_title">Work Experience</h3>

            
                <h4 className="my_work_experience_position">Front-End Developer <span className="experience_company"> Freelance </span> </h4>
                <p className="work_experience_period"> June 2021 - up to now   <span className="experience_divider">|</span>   Country</p> 
        
                <ul className="work_experience_duties">
                    <li className="work_experience_duty_item">I am engaged in the layout of sites and landing pages.</li>
                    <li className="work_experience_duty_item"> Working with layouts of design projects. </li>
                    <li className="work_experience_duty_item"> I do the styling of the site using css, html. </li>
                    <li className="work_experience_duty_item"> I work with JavaScript libraries. With their help, I set different behavior for web pages. Example: adaptive menu.</li>   
                </ul>           
            </div>
            
            <div className="experience_company_block">
                    <h4 className="my_work_experience_position">Design-engineer <span className="experience_company">OTTOM Plant </span> </h4>
                    <p className="work_experience_period"> June 2014 - July 2021  <span className="experience_divider"> | </span> Country</p> 

                    <ul className="work_experience_duties">
                        <li className="work_experience_duty_item"> I was engaged in the development of industrial equipment for mechanical engineering. </li>
                        <li className="work_experience_duty_item"> Сreated 3D models, drawings, visualizations.</li>
                        <li className="work_experience_duty_item"> I have been involved in all stages of production, from design visualization to blueprints for production. </li>
                    </ul>  
            </div>         

            
            <div className="experience_company_block">
                <h4 className="my_work_experience_position"> Сnc machine operator  <span className="experience_company"> Novokramatorsk Machine-building Plant </span> </h4>
                <p className="work_experience_period">February 2012 - March 2014  <span className="experience_divider"> | </span>   Country</p> 
        
                <ul className="work_experience_duties">
                    <li className="work_experience_duty_item"> I was engaged in the basing of the part and the adjustment of the CNC machine.</li>
                    <li className="work_experience_duty_item"> Writing g-code (program) according to the drawing.</li>
                    
                </ul>           
            </div>
        </div>

        

        <div className="experience_company_block">
            <h3 className="main_content_title">Education</h3>
            <h4 className="my_work_experience_position"> <span className="experience_company"> Donbass Engineering Academy </span></h4>
            <h4 className="my_work_experience_position"> Master of Engineering (MEng), engineering</h4>

            <p className="work_experience_period">
                September 2008 - December 2011  <span className="experience_divider"> | </span>   Country
            </p>

        </div>

        </div>
    )
}