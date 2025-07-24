import React, { useState } from 'react';
import { 
  List, 
  ListOrdered, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  Image, 
  Link, 
  Table,
  AlignLeft,
  Type
} from 'lucide-react';

const NoticeDetailsForm = () => {
  const [noticeType, setNoticeType] = useState('employees');
  const [noticeHeading, setNoticeHeading] = useState('');
  const [department, setDepartment] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [textFormat, setTextFormat] = useState('Normal');

const handleSave = async () => {
  const formData = {
    noticeType,
    noticeHeading,
    department,
    noticeContent,
    textFormat
  };

  try {
    const response = await fetch('http://localhost:5000/api/notices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Saved notice:', data);
      alert('Notice saved successfully!');
      handleCancel();
    } else {
      alert('Failed to save notice');
    }
  } catch (error) {
    console.error(error);
    alert('Error occurred while saving notice');
  }
};

  const handleCancel = () => {
    setNoticeType('employees');
    setNoticeHeading('');
    setDepartment('');
    setNoticeContent('');
    setTextFormat('Normal');
  };

  const formatOptions = [
    'Normal',
    'Heading 1',
    'Heading 2',
    'Heading 3',
    'Quote',
    'Code'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Notice Details</h1>
      
      {/* Notice Type Selection */}
      <div className="mb-8">
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="noticeType"
              value="employees"
              checked={noticeType === 'employees'}
              onChange={(e) => setNoticeType(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">To Employees</span>
          </label>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="noticeType"
              value="clients"
              checked={noticeType === 'clients'}
              onChange={(e) => setNoticeType(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">To Clients</span>
          </label>
        </div>
      </div>

      {/* Notice Heading and Department */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notice Heading <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={noticeHeading}
            onChange={(e) => setNoticeHeading(e.target.value)}
            placeholder="e.g. New year celebrations at office."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="">---</option>
            <option value="HR">Human Resources</option>
            <option value="IT">Information Technology</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
      </div>

      {/* Notice Details Editor */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notice Details
        </label>
        
        {/* Toolbar */}
        <div className="border border-gray-300 rounded-t-md bg-gray-50 p-2 flex items-center space-x-2">
          <select
            value={textFormat}
            onChange={(e) => setTextFormat(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {formatOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          
          <div className="w-px h-6 bg-gray-300"></div>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Bullet List"
          >
            <List size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Numbered List"
          >
            <ListOrdered size={16} />
          </button>
          
          <div className="w-px h-6 bg-gray-300"></div>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Bold"
          >
            <Bold size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Italic"
          >
            <Italic size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Underline"
          >
            <Underline size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Strikethrough"
          >
            <Strikethrough size={16} />
          </button>
          
          <div className="w-px h-6 bg-gray-300"></div>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Insert Image"
          >
            <Image size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Insert Link"
          >
            <Link size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Insert Table"
          >
            <Table size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Align Left"
          >
            <AlignLeft size={16} />
          </button>
          
          <button 
            type="button"
            className="p-1 hover:bg-gray-200 rounded"
            title="Format"
          >
            <Type size={16} />
          </button>
        </div>
        
        {/* Text Editor */}
        <textarea
          value={noticeContent}
          onChange={(e) => setNoticeContent(e.target.value)}
          className="w-full h-48 px-3 py-2 border border-gray-300 border-t-0 rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Enter your notice details here..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Save</span>
        </button>
        
        <button
          onClick={handleCancel}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NoticeDetailsForm;