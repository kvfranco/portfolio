import htmlLogoPng from '../assets/images/technologies/logo-html.png';
import htmlLogoWebp from '../assets/images/technologies/logo-html.webp';

import cssLogoPng from '../assets/images/technologies/logo-css.png';
import cssLogoWebp from '../assets/images/technologies/logo-css.webp';

import javascriptLogoPng from '../assets/images/technologies/logo-javascript.png';
import javascriptLogoWebp from '../assets/images/technologies/logo-javascript.webp';

import gitLogoPng from '../assets/images/technologies/logo-git.png';
import gitLogoWebp from '../assets/images/technologies/logo-git.webp';

import cppLogoPng from '../assets/images/technologies/logo-c++.png';
import cppLogoWebp from '../assets/images/technologies/logo-c++.webp';

import awsLogoPng from '../assets/images/technologies/logo-aws.png';
import awsLogoWebp from '../assets/images/technologies/logo-aws.webp';

import dockerLogoPng from '../assets/images/technologies/logo-docker.png';
import dockerLogoWebp from '../assets/images/technologies/logo-docker.webp';

import postgresqlLogoPng from '../assets/images/technologies/logo-postgresql.png';
import postgresqlLogoWebp from '../assets/images/technologies/logo-postgresql.webp';

import typescriptLogoPng from '../assets/images/technologies/logo-typescript.png';
import typescriptLogoWebp from '../assets/images/technologies/logo-typescript.webp';

import reactLogoPng from '../assets/images/technologies/logo-react.png';
import reactLogoWebp from '../assets/images/technologies/logo-react.webp';

import tailwindLogoPng from '../assets/images/technologies/logo-tailwind.png';
import tailwindLogoWebp from '../assets/images/technologies/logo-tailwind.webp';

import nodejsLogoPng from '../assets/images/technologies/logo-nodejs.png';
import nodejsLogoWebp from '../assets/images/technologies/logo-nodejs.webp';

import expressLogoPng from '../assets/images/technologies/logo-express.png';
import expressLogoWebp from '../assets/images/technologies/logo-express.webp';

import mongodbLogoPng from '../assets/images/technologies/logo-mongodb.png';
import mongodbLogoWebp from '../assets/images/technologies/logo-mongodb.webp';

import ociLogoPng from '../assets/images/technologies/logo-oci.png';
import ociLogoWebp from '../assets/images/technologies/logo-oci.webp';

interface technologiesImagesType {
  name: string;
  imgPNG: string;
  imgWebP: string;
  width: number;
  height: number;
}

const technologiesImages: technologiesImagesType[] = [
  {
    name: 'React.js',
    imgPNG: reactLogoPng,
    imgWebP: reactLogoWebp,
    width: 75,
    height: 75,
  },
  {
    name: 'TypeScript',
    imgPNG: typescriptLogoPng,
    imgWebP: typescriptLogoWebp,
    width: 75,
    height: 75,
  },
  {
    name: 'Node.js',
    imgPNG: nodejsLogoPng,
    imgWebP: nodejsLogoWebp,
    width: 100,
    height: 62,
  },
  {
    name: 'Express.js',
    imgPNG: expressLogoPng,
    imgWebP: expressLogoWebp,
    width: 100,
    height: 28,
  },
  {
    name: 'Tailwind CSS',
    imgPNG: tailwindLogoPng,
    imgWebP: tailwindLogoWebp,
    width: 120,
    height: 15,
  },
  {
    name: 'Docker',
    imgPNG: dockerLogoPng,
    imgWebP: dockerLogoWebp,
    width: 75,
    height: 75,
  },
  {
    name: 'AWS',
    imgPNG: awsLogoPng,
    imgWebP: awsLogoWebp,
    width: 85,
    height: 51,
  },
  {
    name: 'OCI',
    imgPNG: ociLogoPng,
    imgWebP: ociLogoWebp,
    width: 100,
    height: 65,
  },
  {
    name: 'PostgreSQL',
    imgPNG: postgresqlLogoPng,
    imgWebP: postgresqlLogoWebp,
    width: 75,
    height: 75,
  },
  {
    name: 'MongoDB',
    imgPNG: mongodbLogoPng,
    imgWebP: mongodbLogoWebp,
    width: 80,
    height: 80,
  },
  {
    name: 'Git',
    imgPNG: gitLogoPng,
    imgWebP: gitLogoWebp,
    width: 85,
    height: 85,
  },
  {
    name: 'C++',
    imgPNG: cppLogoPng,
    imgWebP: cppLogoWebp,
    width: 85,
    height: 85,
  },
  {
    name: 'JavaScript',
    imgPNG: javascriptLogoPng,
    imgWebP: javascriptLogoWebp,
    width: 70,
    height: 70,
  },
  {
    name: 'CSS3',
    imgPNG: cssLogoPng,
    imgWebP: cssLogoWebp,
    width: 60,
    height: 85,
  },
  {
    name: 'HTML5',
    imgPNG: htmlLogoPng,
    imgWebP: htmlLogoWebp,
    width: 61,
    height: 85,
  },
];

export default technologiesImages;