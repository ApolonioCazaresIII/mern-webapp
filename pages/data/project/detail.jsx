import { useRouter } from 'next/router';
import DetailPage from '../../../components/projects/DetailPage';

function ProjectDetails(props) {
  const router = useRouter();
  const { pid } = router.query;
  var pid_string = JSON.stringify(pid);
  return <DetailPage _id={pid_string} />;
}

export default ProjectDetails;
