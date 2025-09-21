
import { workflow } from '../../assets/images';
import CustomTitle from '../shared/CustomTitle';

const DevelopmentWorkflow = () => {
    return (
        <div>
            <CustomTitle title='Outsourced Software Development Workflow' description='Our Strategic Development Plan streamlines project execution enhances collaboration, and ensures timely delivery with flexible scaling, all while maintaining high-quality standards.' />
          <img
      src={workflow}
      alt="Workflow"
      className="w-full max-w-[900px] mx-auto rounded-lg p-4"
    />


        </div>
    );
};

export default DevelopmentWorkflow