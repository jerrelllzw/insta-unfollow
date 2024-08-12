import React from 'react';
import { Dropzone, FileMosaic } from '@files-ui/react';

const JsonInput = (props) => {
	const { files, setFiles, label } = props;

	const updateFiles = (incomingFiles) => {
		setFiles(incomingFiles);
	};

	const removeFile = (id) => {
		setFiles(files.filter((x) => x.id !== id));
	};

	return (
		<Dropzone
			onChange={updateFiles}
			value={files}
			accept='.json'
			maxFiles={1}
			style={{ width: '13em', minHeight: '225px' }}
			label={label}
			color='#EEEEEE'
			background='#393E46'
			behaviour={'replace'}
		>
			{files.map((file) => (
				<FileMosaic
					key={file.id}
					{...file}
					onDelete={removeFile}
					valid={undefined}
					darkMode={true}
				/>
			))}
		</Dropzone>
	);
};

export default JsonInput;
