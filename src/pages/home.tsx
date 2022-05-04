import Layout from '../layout';
import { ConfigObject } from '../utils/types';

interface Props {
  configData: ConfigObject;
}

const Home = ({ configData }: Props) => {
  const { logo } = configData;
  return (
    <Layout configData={configData}>
      <div className="mt-20 flex justify-center">
        <img src={logo} alt="Big Logo" width="400" height="400" />
      </div>
    </Layout>
  );
};

export default Home;
