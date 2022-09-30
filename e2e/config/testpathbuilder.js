const path = require('path');

class TestPathBuilder {
  constructor({rootDir}) {
    this.rootDir = rootDir;
  }

  buildPathForTestArtifact(image, test) {
    const feature = test.fullName.substring(
      0,
      test.fullName.length - test.title.length,
    );
    image = `${test.title}_${image}`;
    const artifact = image.replaceAll('"', '');
    return path.join(this.rootDir, feature, artifact);
  }
}

module.exports = TestPathBuilder;
