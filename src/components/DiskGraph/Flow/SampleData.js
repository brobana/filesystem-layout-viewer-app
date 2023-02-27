export const sampleData = () => {
  return {
    volumeGroups: [
      {
        name: 'tstappvg',
        size: '8585740288B',
        free: '6069157888B',
        relatedPvs: ['/dev/sdb'],
        relatedLvs: ['tstapp1_lv', 'tstapp2_lv'],
      },
    ],
    disks: [
      {
        name: '/dev/xvdb',
        size: '8589934592B',
        relatedPvs: ['/dev/sdb'],
      },
    ],
    physicalVolumes: [
      {
        name: '/dev/sdb',
        size: '8585740288B',
        free: '6069157888B',
        relatedDisk: '/dev/xvdb',
        relatedVg: 'tstappvg',
      },
    ],
    logicalVolumes: [
      {
        name: 'tstapp1_lv',
        size: '1048576000B',
        relatedVg: 'tstappvg',
        relatedFs: '/dev/mapper/tstappvg-tstapp1_lv',
      },
      {
        name: 'tstapp2_lv',
        size: '1468006400B',
        relatedVg: 'tstappvg',
        relatedFs: '/dev/mapper/tstappvg-tstapp2_lv',
      },
    ],
    filesystems: [
      {
        name: '/dev/mapper/tstappvg-tstapp1_lv',
        mountpoint: '/tstapp1',
        size: '1042161664B',
        used: '41095168B',
        available: '1001066496B',
        relatedLv: 'tstapp1_lv',
        type: 'xfs',
      },
      {
        name: '/dev/mapper/tstappvg-tstapp2_lv',
        mountpoint: '/tstapp2',
        size: '1457520640B',
        used: '44003328B',
        available: '1413517312B',
        relatedLv: 'tstapp2_lv',
        type: 'xfs',
      },
    ],
  };
};
