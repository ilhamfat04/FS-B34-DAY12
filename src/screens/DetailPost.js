import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from "axios";

const PostDetail = (props) => {
  //init Props
  const { title, body, id } = props.route.params

  //Init State
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Create LifeCycle
  useEffect(() => {
    getComment()
  }, [])

  //Function Exception
  const getComment = () => {
    setIsLoading(true)
    axios
      .get(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
      .then((res) => {
        setComments(res.data)
        setIsLoading(false)
      })
      .catch(() => {
        alert("Error fetch data")
        setIsLoading(false)
      })
  }

  console.log(comments);

  // Create Function to fetch
  const _renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.id.toString}
        bottomDivider
      >
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>
            {item.email}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
            {`${item.name} - ${item.body}`}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }


  //   Create Component List
  return (
    <View style={style.container}>
      <Text h1 style={{ fontWeight: "bold" }}>
        {title}
      </Text>
      <Text>Comment</Text>
      <FlatList
        data={comments}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getComment} />
        }
      />
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
