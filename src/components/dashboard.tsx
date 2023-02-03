import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, Button, Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    width:"20%"
  },
  exploreBtn : {
    alignSelf:'center',
    marginTop:10
  },
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
}));

interface CommentHtmlProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

export function Dashboard({ postedAt, body, author }: CommentHtmlProps) {
  const { classes } = useStyles();
  const [showNotification,setShowNotification] = useState(false);
  return (
    <div style={{display:'flex', justifyContent:'center'}}>

    <Paper  withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
        <Button onClick={() => {setShowNotification(true)}} className={classes.exploreBtn} size="xs">
            Explore Recipes
          </Button>
      </TypographyStylesProvider>

      {showNotification && <Notification  onClose={() => {setShowNotification(false)}} className={classes.exploreBtn} icon={<IconCheck size={20} />} title="Wow Glad you're exploring">
        You can have access to all the recipes and create it.
      </Notification>}
      
    </Paper>
          
    </div>
  );
}