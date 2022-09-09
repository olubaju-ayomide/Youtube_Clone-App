import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((video, id) => (
        <Box key={id}>
          {video && <VideoCard video ={video}/> }
          {/* {video && <ChannelCard channelDetail />} */}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;