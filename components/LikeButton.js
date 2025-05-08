import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
// import { IonIcons } from 'react-native-heroicons/outline'; 

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setLiked(!liked)}
      className={`w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center ${
        liked ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <Ionicons name={liked?'heart':'heart-outline'} size={20} color={liked ? 'white' : 'gray'} />
    </TouchableOpacity>
  );
}
