const esv = [
  {
    passage: "john 3:27",
    chapter: "john 3",
    speaker: "john the baptist",
  },
  {
    passage: "john 3:30",
    chapter: "john 3",
    speaker: "john the baptist",
  },
  {
    passage: "john 1:11-13",
    chapter: "john 3",
    speaker: "john",
  },
  {
    passage: "ephesians 5:8",
    chapter: "ephesians 5",
    speaker: "paul",
  },
  {
    passage: "ephesians 5:11",
    chapter: "ephesians 5",
    speaker: "paul",
  },
  {
    passage: "ephesians 5:21",
    chapter: "ephesians 5",
    speaker: "paul",
  },
  {
    passage: "galatians 5:1",
    chapter: "galatians 5",
    speaker: "paul",
  },
  {
    passage: "galatians 6:1",
    chapter: "galatians 6",
    speaker: "paul",
  },
  {
    passage: "galatians 5:16",
    chapter: "galatians 5",
    speaker: "paul",
  },
  {
    passage: "galatians 5:17",
    chapter: "galatians 5",
    speaker: "paul",
  },
  {
    passage: "romans 5:17",
    chapter: "romans 5",
    speaker: "paul",
  },
  {
    passage: "romans 5:3-5",
    chapter: "romans 5",
    speaker: "paul",
  },
  {
    passage: "romans 3:4",
    chapter: "romans 3",
    speaker: "paul",
  },
  {
    passage: "habakkuk 2:4",
    chapter: "habakkuk 2",
    speaker: "habakkuk",
  },
  {
    passage: "psalm 37:4",
    chapter: "psalm 37",
    speaker: "david",
  },
  {
    passage: "psalm 34:13-14",
    chapter: "psalm 34",
    speaker: "david",
  },
  {
    passage: "psalm 34:19",
    chapter: "psalm 34",
    speaker: "david",
  },
  {
    passage: "psalm 34:18",
    chapter: "psalm 34",
    speaker: "david",
  },
  {
    passage: "psalm 32:2",
    chapter: "psalm 32",
    speaker: "david",
  },
  {
    passage: "psalm 31:24",
    chapter: "psalm 31",
    speaker: "david",
  },
  {
    passage: "psalm 4:23",
    chapter: "psalm 4",
    speaker: "david",
  },
  {
    passage: "isaiah 64:8",
    chapter: "isaiah 64",
    speaker: "isaiah",
  },
  {
    passage: "psalm 31:21",
    chapter: "psalm 31",
    speaker: "david",
  },
  {
    passage: "psalm 27:1",
    chapter: "psalm 27",
    speaker: "david",
  },
  {
    passage: "psalm 25:3",
    chapter: "psalm 25",
    speaker: "david",
  },
  {
    passage: "psalm 25:12-13",
    chapter: "psalm 25",
    speaker: "david",
  },
  {
    passage: "psalm 22:10",
    chapter: "psalm 22",
    speaker: "david",
  },
  {
    passage: "psalm 20:7",
    chapter: "psalm 20",
    speaker: "david",
  },
  {
    passage: "2 samuel 22:1-3",
    chapter: "2 samuel 22",
    speaker: "david",
  },
  {
    passage: "2 samuel 22:29",
    chapter: "2 samuel 22",
    speaker: "david",
  },
  {
    passage: "2 samuel 22:31",
    chapter: "2 samuel 22",
    speaker: "david",
  },
  {
    passage: "exodus 15:1",
    chapter: "exodus 15",
    speaker: "moses",
  },
  {
    passage: "exodus 15:2",
    chapter: "exodus 15",
    speaker: "moses",
  },
  {
    passage: "exodus 15:6",
    chapter: "exodus 15",
    speaker: "moses",
  },
  {
    passage: "exodus 15:18",
    chapter: "exodus 15",
    speaker: "moses",
  },
  {
    passage: "1 samuel 2:1",
    chapter: "1 samuel 2",
    speaker: "hannah",
  },
  {
    passage: "1 samuel 2:2",
    chapter: "1 samuel 2",
    speaker: "hannah",
  },
  {
    passage: "1 samuel 2:6",
    chapter: "1 samuel 2",
    speaker: "hannah",
  },
  {
    passage: "daniel 4:34-35",
    chapter: "daniel 4",
    speaker: "nebuchadnezzar",
  },
  {
    passage: "daniel 4:37",
    chapter: "daniel 4",
    speaker: "nebuchadnezzar",
  },
  {
    passage: "isaiah 1:17",
    chapter: "isaiah 1",
    speaker: "god",
  },
  {
    passage: "isaiah 2:22",
    chapter: "isaiah 2",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 6:8",
    chapter: "isaiah 6:8",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 9:2",
    chapter: "isaiah 9",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 9:7",
    chapter: "isaiah 9",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 11:9",
    chapter: "isaiah 11",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 26:8",
    chapter: "isaiah 26",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 25:1",
    chapter: "isaiah 25",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 30:18",
    chapter: "isaiah 30",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 40:8",
    chapter: "isaiah 40",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 40:17",
    chapter: "isaiah 40",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 42:3-4",
    chapter: "isaiah 42",
    speaker: "god",
  },
  {
    passage: "proverbs 15:33",
    chapter: "proverbs 15",
    speaker: "solomon",
  },
  {
    passage: "proverbs 16:5",
    chapter: "proverbs 16",
    speaker: "solomon",
  },
  {
    passage: "proverbs 16:32",
    chapter: "proverbs 16",
    speaker: "solomon",
  },
  {
    passage: "proverbs 16:33",
    chapter: "proverbs 16",
    speaker: "solomon",
  },
  {
    passage: "proverbs 17:28",
    chapter: "proverbs 17",
    speaker: "solomon",
  },
  {
    passage: "proverbs 12:27",
    chapter: "proverbs 12",
    speaker: "solomon",
  },
  {
    passage: "proverbs 10:14",
    chapter: "proverbs 10",
    speaker: "solomon",
  },
  {
    passage: "proverbs 10:27",
    chapter: "proverbs 10",
    speaker: "solomon",
  },
  {
    passage: "proverbs 11:2",
    chapter: "proverbs 11",
    speaker: "solomon",
  },
  {
    passage: "proverbs 3:5",
    chapter: "proverbs 3",
    speaker: "solomon",
  },
  {
    passage: "proverbs 1:7",
    chapter: "proverbs 1",
    speaker: "solomon",
  },
  {
    passage: "psalm 145:19-20",
    chapter: "psalm 145",
    speaker: "david",
  },
  {
    passage: "psalm 129:5-6",
    chapter: "psalm 129",
    speaker: "david",
  },
  {
    passage: "psalm 128:1-4",
    chapter: "psalm 128",
  },
  {
    passage: "psalm 133:1",
    chapter: "psalm 133",
    speaker: "david",
  },
  {
    passage: "psalm 119:144",
    chapter: "psalm 119",
  },
  {
    passage: "psalm 116:6-7",
    chapter: "psalm 116",
  },
  {
    passage: "psalm 118:14",
    chapter: "psalm 118",
  },
  {
    passage: "isaiah 54:8",
    chapter: "isaiah 54",
    speaker: "god",
  },
  {
    passage: "isaiah 53:3",
    chapter: "isaiah 53",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 53:11",
    chapter: "isaiah 53",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 55:6-7",
    chapter: "isaiah 55",
    speaker: "isaiah",
  },
  {
    passage: "isaiah 55:1-2",
    chapter: "isaiah 55",
    speaker: "god",
  },
  {
    passage: "matthew 5:11-12",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:3",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:4",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:5",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:6",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:6",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:7",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:8",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:9",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:10",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:14-15",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:16",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:37",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 5:44",
    chapter: "matthew 5",
    speaker: "jesus",
  },
  {
    passage: "matthew 6:14",
    chapter: "matthew 6",
    speaker: "jesus",
  },
  {
    passage: "matthew 7:6",
    chapter: "matthew 7",
    speaker: "jesus",
  },
  {
    passage: "matthew 7:7-8",
    chapter: "matthew 7",
    speaker: "jesus",
  },
  {
    passage: "matthew 7:11",
    chapter: "matthew 7",
    speaker: "jesus",
  },
  {
    passage: "matthew 7:13-14",
    chapter: "matthew 7",
    speaker: "jesus",
  },
  {
    passage: "matthew 7:16-17",
    chapter: "matthew 7",
    speaker: "jesus",
  },
  {
    passage: "matthew 7:24-25",
    chapter: "matthew 7",
    speaker: "jesus",
  },
  {
    passage: "matthew 8:27",
    chapter: "matthew 7",
    speaker: "jesus",
  },
];
