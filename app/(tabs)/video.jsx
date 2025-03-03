import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  ActivityIndicator,
  Share,
  Alert,
} from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

const API_KEY = "AIzaSyC5EIqMsYSnMY7PmlE0PmIF1R5us5hbsgI"; // Replace with your API key
const SEARCH_QUERY = "movies";
const MAX_RESULTS = 20;

export default function App() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async (pageToken = "") => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${SEARCH_QUERY}&type=video&maxResults=${MAX_RESULTS}&pageToken=${pageToken}&key=${API_KEY}`
      );

      // Append new videos to existing ones
      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);

      // Save the next page token
      setNextPageToken(response.data.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }

    setLoading(false);
  };

  // Function to load the next page
  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchYouTubeVideos(nextPageToken);
    }
  };

  // Open video in modal
  const playVideo = (videoId) => {
    setSelectedVideo(videoId);
    setModalVisible(true);
  };


  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const onShare = async (videoId) => {
    try {
      const result = await Share.share({
        message: `Check out this video: https://www.youtube.com/watch?v=${videoId}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#000" }}> 
    <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",

                zIndex: 1,
              }}
            >
              <Image
                source={require("../../assets/images/splashIcon.png")}
                style={{ height: 50, right:30, transform: [{ scale: 0.5 }] }}
              />
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Text
                  style={{
                    color: "white",
                    marginHorizontal: 10,
                    fontWeight: "bold",
                    top:15,
                  }}
                >
                  Privacy
                </Text>
                <Text
                  style={{
                    color: "white",
                    marginHorizontal: 10,
                    fontWeight: "bold",
                    top:15,
                  }}
                >
                  Help
                </Text>
              </View>
            </View>     
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 20,
              backgroundColor: "#000",
              padding: 5,
              borderRadius: 10,
            }}
          >
            {/* Thumbnail Image */}
            <TouchableOpacity onPress={() => playVideo(item.id.videoId)}>
              <Image
                source={{ uri: item.snippet.thumbnails.high.url }}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
            </TouchableOpacity>

            {/* Title and Date Side by Side */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              {/* Video Title */}
              <Text
                style={{ fontSize: 16, color: "#fff", flex: 1 }}
                numberOfLines={1}
              >
                {item.snippet.title}
              </Text>

              {/* Video Upload Date */}
              <Text style={{ color: "#888", fontSize: 14, marginLeft: 10 }}>
                {formatDate(item.snippet.publishedAt)}
              </Text>
            </View>
            <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: 10,
                  marginTop: 5,
                }}
              >
                <View>
                  <Ionicons
                    name="notifications"
                    style={{ fontSize: 40, color: "white",textAlign:'center' }}
                  />
                  <Text style={{color:'#fff',textAlign:'center'}}>Remind me</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => onShare(item.id.videoId)}>
                  <Ionicons
                    name="share-social-outline"
                    style={{ fontSize: 40, color: "white",textAlign:'center' }}
                  />
                  </TouchableOpacity>
                  <Text style={{color:'#fff',textAlign:'center'}}>Share</Text>
                </View>
                
              </View>
              <View>
              <Text
                style={{ fontSize: 16, color: "gray",paddingTop:20 }}
              >
                {item.snippet.description}
                
              </Text>
              </View>
           
          </View>
        )}
        onEndReached={loadMoreVideos} // Load more videos when scrolling to the bottom
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#FF0000" /> : null
        } // Show loader
      />

      {/* Video Player Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: `https://www.youtube.com/embed/${selectedVideo}` }}
            style={{ flex: 1 }}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
