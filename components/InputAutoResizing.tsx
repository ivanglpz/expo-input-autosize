import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const loremText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque non maxime tempora explicabo quae dolorem modi ratione illum. Est ducimus id quam nisi facere. Sint magnam quod adipisci neque voluptatibus?`;

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};
export const InputAutoResizing = ({ onChange, value }: InputProps) => {
  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        padding: 8,
        borderWidth: 1,
        borderColor: "#d7d7d7",
        borderRadius: 8,
        width: "100%",
        gap: 8,
      }}
    >
      <TextInput
        editable
        multiline
        textAlignVertical="top"
        placeholder="Write something..."
        placeholderTextColor={"black"}
        scrollEnabled
        onChangeText={(v) => {
          if (v === value) {
            return;
          }
          onChange(v);
        }}
        style={{
          width: "100%",
          padding: 8,
          color: "black",
          maxHeight: Dimensions.get("window").height - 200,
        }}
      >
        <Text>
          {value?.match(/(\S+\s*|\s+)/g)?.map((e, index) => {
            return <Text key={`words-${index}`}>{e}</Text>;
          })}
        </Text>
      </TextInput>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 8,
              borderRadius: 8,
              width: 38,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              onChange(`${value} ${loremText}`);
            }}
          >
            <Svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.934 2H16.066C16.952 2 17.716 2 18.328 2.082C18.983 2.17 19.612 2.369 20.121 2.879C20.631 3.389 20.83 4.017 20.918 4.672C21 5.284 21 6.048 21 6.934V7.95C21 8.21522 20.8946 8.46957 20.7071 8.65711C20.5196 8.84464 20.2652 8.95 20 8.95C19.7348 8.95 19.4804 8.84464 19.2929 8.65711C19.1054 8.46957 19 8.21522 19 7.95V7C19 6.029 18.998 5.401 18.936 4.939C18.877 4.505 18.783 4.369 18.707 4.293C18.631 4.217 18.495 4.123 18.061 4.064C17.6 4.002 16.971 4 16 4H13V21C13 21.2652 12.8946 21.5196 12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22C11.7348 22 11.4804 21.8946 11.2929 21.7071C11.1054 21.5196 11 21.2652 11 21V4H8C7.029 4 6.401 4.002 5.939 4.064C5.505 4.123 5.369 4.217 5.293 4.293C5.217 4.369 5.123 4.505 5.064 4.939C5.002 5.4 5 6.029 5 7V7.95C5 8.21522 4.89464 8.46957 4.70711 8.65711C4.51957 8.84464 4.26522 8.95 4 8.95C3.73478 8.95 3.48043 8.84464 3.29289 8.65711C3.10536 8.46957 3 8.21522 3 7.95V6.934C3 6.048 3 5.284 3.082 4.672C3.17 4.017 3.369 3.388 3.879 2.879C4.389 2.369 5.017 2.17 5.672 2.082C6.284 2 7.048 2 7.934 2Z"
                fill="white"
              />
              <Path
                d="M7 21H17"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 8,
              borderRadius: 8,
              width: 38,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              onChange("");
            }}
          >
            <Svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <Path
                d="M9 1H15V9.5H21V23H3V9.5H9V1ZM11 3V11.5H5V14H19V11.5H13V3H11ZM19 16H5V21H14V18H16V21H19V16Z"
                fill="white"
              />
            </Svg>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 8,
            borderRadius: 8,
            width: 38,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <Path
              d="M10.0001 14L21.0001 3M10.0001 14L13.5001 21C13.5439 21.0957 13.6144 21.1769 13.703 21.2338C13.7917 21.2906 13.8948 21.3209 14.0001 21.3209C14.1054 21.3209 14.2085 21.2906 14.2971 21.2338C14.3858 21.1769 14.4562 21.0957 14.5001 21L21.0001 3M10.0001 14L3.00007 10.5C2.90433 10.4561 2.8232 10.3857 2.76632 10.2971C2.70944 10.2084 2.6792 10.1053 2.6792 10C2.6792 9.89468 2.70944 9.79158 2.76632 9.70295C2.8232 9.61431 2.90433 9.54387 3.00007 9.5L21.0001 3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};
