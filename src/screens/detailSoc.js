import * as React from "react";
import { Text, Box } from "native-base";

// Declare route
export default function DetailSoc({ route }) {
  console.log(route);
  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        {route.params.value}
        {route.params.data}
      </Text>
    </Box>
  );
}
