import { Quill } from '../../../quill/quill'

const editor = new Quill('#editor', {
  modules: {
    // toolbar: '#toolbar',
    theme: 'snow'
  }
})