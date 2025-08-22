import * as Readme from "../jsx.js";
import { Image } from "./image.js";

const TAGS = {
  codecov:
    "https://img.shields.io/badge/Codecov-F01F7A?style=for-the-badge&logo=Codecov&logoColor=white",
  googleAnalytics:
    "https://img.shields.io/badge/Google%20Analytics-E37400?style=for-the-badge&logo=google%20analytics&logoColor=white",
  homarr:
    "https://img.shields.io/badge/Homarr-FA5252?style=for-the-badge&logo=homarr&logoColor=white",
  hotjar:
    "https://img.shields.io/badge/hotjar-FD3A5C?style=for-the-badge&logo=hotjar&logoColor=white",
  kibana:
    "https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=Kibana&logoColor=white",
  matomo:
    "https://img.shields.io/badge/Matomo-3152A0?style=for-the-badge&logo=Matomo&logoColor=white",
  sonarqube:
    "https://img.shields.io/badge/Sonarqube-5190cf?style=for-the-badge&logo=sonarqube&logoColor=white",
  tableau:
    "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=Tableau&logoColor=white",
  wakatime:
    "https://img.shields.io/badge/WakaTime-000000?style=for-the-badge&logo=WakaTime&logoColor=white",
  chatgpt:
    "https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white",
  claude:
    "https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=claude&logoColor=white",
  cometMl:
    "https://custom-icon-badges.demolab.com/badge/comet%20ml-262c3e?style=for-the-badge&logo=logo_comet_ml&logoColor=white",
  dialogflow:
    "https://img.shields.io/badge/dialogflow-FF9800?style=for-the-badge&logo=dialogflow&logoColor=white",
  githubCopilot:
    "https://img.shields.io/badge/github%20copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white",
  googleGemini:
    "https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white",
  hugginface:
    "https://img.shields.io/badge/-HuggingFace-FDEE21?style=for-the-badge&logo=HuggingFace&logoColor=black",
  keras:
    "https://img.shields.io/badge/Keras-FF0000?style=for-the-badge&logo=keras&logoColor=white",
  langchain:
    "https://img.shields.io/badge/langchain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white",
  lightning:
    "https://img.shields.io/badge/Lightning-792DE4?style=for-the-badge&logo=lightning&logoColor=white",
  perplexity:
    "https://img.shields.io/badge/Perplexity-1FB8CD?style=for-the-badge&logo=perplexity&logoColor=white",
  pytorch:
    "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
  replicate:
    "https://img.shields.io/badge/-Replicate-000000?style=for-the-badge&logo=replicate&logoColor=white",
  tensorflow:
    "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
  weightsAndBiases:
    "https://img.shields.io/badge/Weights_&_Biases-FFBE00?style=for-the-badge&logo=WeightsAndBiases&logoColor=white",
  blockchain:
    "https://img.shields.io/badge/Blockchain.com-121D33?logo=blockchaindotcom&logoColor=fff&style=for-the-badge",
  coinbase:
    "https://img.shields.io/badge/Coinbase-0052FF?style=for-the-badge&logo=Coinbase&logoColor=white",
  hyperledge:
    "https://img.shields.io/badge/hyperledger-2F3134?style=for-the-badge&logo=hyperledger&logoColor=white",
  openzeppelin:
    "https://img.shields.io/badge/OpenZeppelin-4E5EE4?logo=OpenZeppelin&logoColor=fff&style=for-the-badge",
  blogger:
    "https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white",
  devTo:
    "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white",
  elementor:
    "https://img.shields.io/badge/Elementor-92003B?style=for-the-badge&logo=elementor&logoColor=white",
  geeksForGeeks:
    "https://img.shields.io/badge/GeeksforGeeks-298D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white",
  ghost:
    "https://img.shields.io/badge/Ghost-000?style=for-the-badge&logo=ghost&logoColor=yellow",
  githubPages:
    "https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github%20Pages&logoColor=white",
  hasnode:
    "https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white",
  jooma:
    "https://img.shields.io/badge/Joomla-5091CD?style=for-the-badge&logo=joomla&logoColor=white",
  medium:
    "https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white",
  microBlog:
    "https://img.shields.io/badge/Micro%20blog-FF8800?style=for-the-badge&logo=Microdotblog&logoColor=white",
  naver:
    "https://img.shields.io/badge/NAVER-03C75A?style=for-the-badge&logo=NAVER&logoColor=FFFFFF",
  rss: "https://img.shields.io/badge/RSS-FFA500?style=for-the-badge&logo=rss&logoColor=white",
  wattpad:
    "https://img.shields.io/badge/Wattpad-F96854?style=for-the-badge&logo=wattpad&logoColor=white",
  wix: "https://img.shields.io/badge/Wix-000?style=for-the-badge&logo=wix&logoColor=white",
  wordpress:
    "https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white",
};

export const Tag = ({ type }: { type: keyof typeof TAGS }) => {
  return <Image src={TAGS[type]} />;
};
