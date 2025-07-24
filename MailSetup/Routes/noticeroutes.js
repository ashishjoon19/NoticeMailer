import { Router } from 'express';
import Notice from '../models/notice.model.js';
import User from '../models/User.model.js';
import sendMail from '../utils/email.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    console.log('📥 New Notice Request:', req.body);

    const { noticeType, department, noticeHeading, noticeContent } = req.body;

    const newNotice = new Notice({
      noticeType,
      department,
      noticeHeading,
      noticeContent
    });
    const savedNotice = await newNotice.save();
    console.log('Notice saved:', savedNotice);

    let recipients = [];

    if (noticeType === 'employees') {
      // Use REGEX for case-insensitive match
      recipients = await User.find({
        role: 'employee',
        department: { $regex: `^${department}$`, $options: 'i' }
      }).select('email -_id');
    } else if (noticeType === 'clients') {
      recipients = await User.find({ role: 'client' }).select('email -_id');
    }

    // Extract only emails
    recipients = recipients.map(u => u.email);

    console.log('📬 Resolved Recipients:', recipients);

    if (!recipients || recipients.length === 0) {
      return res.status(400).json({ message: 'No recipients found for this notice.' });
    }

    const subject = `New Notice: ${noticeHeading}`;
    const text = `
      Notice Type: ${noticeType}
      Department: ${department}
      Heading: ${noticeHeading}
      Content: ${noticeContent}
    `;

    await sendMail(subject, text, recipients);

    res.status(201).json(savedNotice);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
