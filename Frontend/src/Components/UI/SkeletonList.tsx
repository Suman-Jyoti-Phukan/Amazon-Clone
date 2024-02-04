import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function SkeletonList() {
  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </div>
  );
}

export default SkeletonList;
