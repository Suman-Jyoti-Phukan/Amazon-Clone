import { Box, Container, Skeleton } from "@mui/material";

function SkeletonBox({ length }: { length: number }) {
  return (
    <section className="grid grid-cols-3 grid-rows-2">
      {Array.from({ length }, (_, index) => (
        <Container key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 350,
              padding: 2,
            }}
          >
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Box sx={{ marginTop: 2 }}>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="70%" />
            </Box>
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="text" width="20%" />
              <Skeleton variant="text" width="20%" />
            </Box>
          </Box>
        </Container>
      ))}
    </section>
  );
}

export default SkeletonBox;
