// src/components/DepartmentList.tsx
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import departmentsData, { DepartmentData } from '../data/departmentsData'; // Adjust the path as necessary

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({}); // Use Record for dynamic keys

  const handleClick = (department: string) => {
    setOpen(prevOpen => ({ ...prevOpen, [department]: !prevOpen[department] }));
  };

  return (
    <List>
      {departmentsData.map(({ department, sub_departments }: DepartmentData) => (
        <React.Fragment key={department}>
          <ListItem button onClick={() => handleClick(department)}>
            <ListItemIcon>
              <IconButton edge="end" aria-label="expand">
                {open[department] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={department.replace(/_/g, ' ')} />
          </ListItem>
          <Collapse in={open[department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sub_departments.map((subDepartment: string) => (
                <ListItem key={subDepartment} sx={{ pl: 4 }}>
                  <ListItemText primary={subDepartment.replace(/_/g, ' ')} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
