import React from 'react';

import CardAbout from '../CardAbout';

import data from '../../../assets/data/about.json';

const CardAboutContainer = () => (
  <>
    <div className=" text-center flex font-bold">
    </div>
    <div className="flex flex-col justify-start w-full gap-4 px-6 py-4">
      <div className="flex flex-col gap-3 pb-4">
        {
            data.devs.map((dev) => (
              <CardAbout
                key={dev.lastname}
                firstname={dev.firstname}
                lastname={dev.lastname}
                url_picture={dev.url_picture}
                roles={dev.roles}
                githubLink={dev.githubLink}
                linkedinLink={dev.linkedinLink}
              />
            ))
          }
      </div>
    </div>
  </>
);

export default CardAboutContainer;
