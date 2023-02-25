import React from 'react'
import './Project.scss'
import excel from '../../assets/templateImg/project/excel_project.png'
import studio from '../../assets/templateImg/project/studio_project.png'
import yt from '../../assets/templateImg/project/youtube_project.png'
const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>
      <div className="container project_container">
        <div className="project_item">
          <div className="project_image"><img src={yt} alt="" /></div>
          <h3>Image caption generator using PyTorch</h3>
          <ul className="project_dis">
            <li>The model is designed to identify and predict the most likely scenarios depicted in an image. It was trained
using transfer learning on VGG16 weights and an LSTM network, enabling it to accurately caption the processes
taking place in the image.</li>
            <li>Utilizing transfer learning on VGG16 weights and an LSTM network, the model is capable of accurately
predicting the best possible scenarios present in a given image. Its specialized architecture allows it to caption
the processes occurring in the image with precision</li>
            <li>The model, which has been trained on VGG16 weights and an LSTM network using transfer learning, excels at
identifying and predicting the most probable scenarios present in an image. Its advanced architecture enables
it to caption the processes depicted in the image with great accuracy.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/youtube-clone-using-react" className='btn' target='_blank'>GitHub</a>
            <a href="https://sanyoutube.cf/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>
        <div className="project_item">
          <div className="project_image"><img src={excel} alt="" /></div>
          <h3>Transcribing handwritten images using deep learning</h3>
          <ul className="project_dis">
            <li>With my expertise in computer vision, I have developed a method for generating sequences of words from
input images. This involves passing the image through a convolutional network to retrieve the feature map
and then processing it through an RNN to generate the sequence of words.</li>
            <li>Through the use of CNNs and RNNs, I have created a highly effective system for transcribing handwritten
words from images. The process begins by passing the image through a convolutional network to extract the
feature maps, which are then fed through an RNN to generate the corresponding sequence of words. The CTC
loss function is used to ensure the accuracy of the transcriptions</li>
            <li>My specialized knowledge in deep learning has enabled me to develop an innovative approach to transcribing
handwritten words from images. This involves using CNNs and RNNs to extract the feature maps and generate
the sequence of words, respectively.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/excel-clone" className='btn' target='_blank'>GitHub</a>
            <a href="https://sanexcel.cf/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div>
        {/* <div className="project_item">
          <div className="project_image"><img src={studio} alt="" /></div>
          <h3>Music Player</h3>
          <ul className="project_dis">
            <li>A music player web application with scalable infrastructure and responsiveness.</li>
            <li>Technologies used: HTML, CSS, BootStrap, Tailwind CSS and Vanilla JavaScript.</li>
            <li>Supports various music formats including .mp3, WMA, WAV, etc.</li>
            <li>Interactive GUI.</li>
            <li>It consists of all the features like pause, play, track bar, etc.</li>
          </ul>
          <div className="project_cta">
            <a href="https://github.com/sachinkumar1469/music-player/" className='btn' target='_blank'>GitHub</a>
            <a href="https://sanstudio.cf/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </div> */}
        
      </div>
      
    </section>
  )
}

export default Project
