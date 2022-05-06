import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectNav } from '../appState/slice';
import Layout from '../layout';

interface Props {
  configData: ConfigObject;
}

const Home = ({ configData }: Props) => {
  const { logo } = configData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNav(0));
  }, []);
  return (
    <Layout>
      <div className="mt-20 flex justify-center">
        <img src={logo} alt="Big Logo" width="400" height="400" />
      </div>
    </Layout>
  );
};

export default Home;
