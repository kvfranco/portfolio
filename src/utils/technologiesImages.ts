import htmlLogoPng from '../assets/images/technologies/logo-html.png';
import cssLogoPng from '../assets/images/technologies/logo-css.png';
import javascriptLogoPng from '../assets/images/technologies/logo-javascript.png';
import gitLogoPng from '../assets/images/technologies/logo-git.png';
import cppLogoPng from '../assets/images/technologies/logo-c++.png';
import awsLogoPng from '../assets/images/technologies/logo-aws.png';
import dockerLogoPng from '../assets/images/technologies/logo-docker.png';
import postgresqlLogoPng from '../assets/images/technologies/logo-postgresql.png';
import typescriptLogoPng from '../assets/images/technologies/logo-typescript.png';
import reactLogoPng from '../assets/images/technologies/logo-react.png';
import tailwindLogoPng from '../assets/images/technologies/logo-tailwind.png';
import nodejsLogoPng from '../assets/images/technologies/logo-nodejs.png';
import expressLogoPng from '../assets/images/technologies/logo-express.png';
import mongodbLogoPng from '../assets/images/technologies/logo-mongodb.png';
import ociLogoPng from '../assets/images/technologies/logo-oci.png';
import wordpressLogoPng from '../assets/images/technologies/logo-wordpress.png';

interface technologiesImagesType {
  name: string;
  imgPNG: string;
  width: number;
  height: number;
}

const technologiesImages: technologiesImagesType[] = [
  {
    name: 'React.js',
    imgPNG: reactLogoPng,
    width: 75,
    height: 75,
  },
  {
    name: 'TypeScript',
    imgPNG: typescriptLogoPng,
    width: 75,
    height: 75,
  },
  {
    name: 'Node.js',
    imgPNG: nodejsLogoPng,
    width: 100,
    height: 62,
  },
  {
    name: 'Express.js',
    imgPNG: expressLogoPng,
    width: 100,
    height: 28,
  },
  {
    name: 'Tailwind CSS',
    imgPNG: tailwindLogoPng,
    width: 120,
    height: 15,
  },
  {
    name: 'Docker',
    imgPNG: dockerLogoPng,
    width: 75,
    height: 75,
  },
  {
    name: 'AWS',
    imgPNG: awsLogoPng,
    width: 85,
    height: 51,
  },
  {
    name: 'OCI',
    imgPNG: ociLogoPng,
    width: 100,
    height: 65,
  },
  {
    name: 'PostgreSQL',
    imgPNG: postgresqlLogoPng,
    width: 75,
    height: 75,
  },
  {
    name: 'MongoDB',
    imgPNG: mongodbLogoPng,
    width: 80,
    height: 80,
  },
  {
    name: 'C++',
    imgPNG: cppLogoPng,
    width: 85,
    height: 85,
  },
  {
    name: 'Git',
    imgPNG: gitLogoPng,
    width: 85,
    height: 85,
  },
  {
    name: 'Wordpress',
    imgPNG: wordpressLogoPng,
    width: 75,
    height: 75,
  },
  {
    name: 'JavaScript',
    imgPNG: javascriptLogoPng,
    width: 70,
    height: 70,
  },
  {
    name: 'CSS3',
    imgPNG: cssLogoPng,
    width: 60,
    height: 85,
  },
  {
    name: 'HTML5',
    imgPNG: htmlLogoPng,
    width: 61,
    height: 85,
  },
];

export default technologiesImages;