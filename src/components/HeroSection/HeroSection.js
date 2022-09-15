import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImgNaruto from '../../images/naruto.png';
import './HeroSection.css';

function HeroSection() {
    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <img id="heroImg" src={ImgNaruto} />
                </Col>
                <Col md={6} sm={12}>
                    <p className="intro"><b>Naruto Uzumaki</b> (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki
                        clan.
                        He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be
                        shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard
                        to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the
                        following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero
                        both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the
                        Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He
                        soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to
                        achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally
                        meaning: Seventh Fire Shadow).</p>

                    <p className="intro"><b>Personality: </b>Naruto is noted as boisterous, exuberant, and unorthodox, quite
                        similar to Hashirama Senju. He inherited his mother's verbal tic, as he ends his sentences with
                        "Dattebayo!" (だってばよ!) when emotional. Though he responds best to competition and is not afraid to
                        ask for assistance, Naruto is relatively naïve and slow to understand principles or situations. He
                        often requires an oversimplified analogy in order to grasp explanations and can even prove
                        forgetful.[26] Naruto is aware of his faults and admits he acts strong to mask his embarrassment and
                        frustration about them. Despite his naivety, Naruto can be quite observant, picking up on
                        things others miss and retaining information casually gathered through conversation.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection;