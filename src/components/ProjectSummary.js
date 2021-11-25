import React from 'react';

const ProjectSummary = ({ totalPledge, totalBackers }) => {
    return (
        <section className='project-summary card-container'>
            <div className='project-stats'>
                <div className='project-stats__funds project-stats__text'>
                    <span className='project-stats__funds-figure project-stats__fig fw-700'>${ totalPledge.toLocaleString() }</span>
                    <span className='project-stats__units'>of $100,000 backed</span>

                </div>
                <div className='project-stats__backers project-stats__text'>
                    <span className='project-stats__backers-figure project-stats__fig fw-700'>{ totalBackers.toLocaleString() }</span>
                    <span className='project-stats__units'>total backers</span>

                </div>
                <div className='project-stats__duration project-stats__text'>
                    <span className='project-stats__duration-figure project-stats__fig fw-700'>56</span>
                    <span className='project-stats__units'>days left</span>

                </div>
            </div>
            <progress
                className='project-fund__progress'
                id='fund-progress'
                max='100000'
                value={ `${totalPledge}` }
            />
        </section>
    );
};

export default ProjectSummary;
