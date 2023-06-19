import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './navigation'
import { BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import BlogSummarizer from './web'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
    <BlogSummarizer/>
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
