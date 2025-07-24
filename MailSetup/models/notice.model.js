import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  noticeType: { type: String, required: true },
  department: { type: String },
  noticeHeading: { type: String, required: true },
  noticeContent: { type: String, required: true }
});

const Notice = mongoose.model('Notice', noticeSchema);

export default Notice;
