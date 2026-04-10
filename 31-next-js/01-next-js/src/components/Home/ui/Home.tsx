import { JSX } from 'react';

interface IProps {
    props: string[]
}

const Home = ({props}: IProps): JSX.Element => {

    
  return (
    <div>
      {props}
    </div>
  )
}

export default Home;
