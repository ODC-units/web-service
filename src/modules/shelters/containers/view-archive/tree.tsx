import React, { useState } from 'react';
import { DiCss3, DiJavascript, DiNpm } from 'react-icons/di';
import { FaList, FaRegFolder, FaRegFolderOpen } from 'react-icons/fa';
import TreeView, { flattenTree } from 'react-accessible-treeview';
import './styles.css';

const folder = {
	name: '',
	children: [
		{
			name: 'src',
			children: [{ name: 'index.js' }, { name: 'styles.css' }],
		},
		{
			name: 'node_modules',
			children: [
				{
					name: 'react-accessible-treeview',
					children: [{ name: 'index.js' }],
				},
				{ name: 'react', children: [{ name: 'index.js' }] },
			],
		},
		{
			name: '.npmignore',
		},
		{
			name: 'package.json',
		},
		{
			name: 'webpack.config.js',
		},
	],
};

const data = flattenTree(folder);

const DirectoryTreeView = () => (
	<>
		<div className="directory">
			<TreeView
				data={data}
				aria-label="directory tree"
				nodeRenderer={({
					element,
					isBranch,
					isExpanded,
					getNodeProps,
					level,
				}) => (
					<div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
						{isBranch ? (
							<FolderIcon isOpen={isExpanded} />
						) : (
							<FileIcon filename={element.name} />
						)}

						{element.name}
					</div>
				)}
			/>
		</div>
	</>
);

export default DirectoryTreeView;
