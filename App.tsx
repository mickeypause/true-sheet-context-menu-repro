// A non-dimmed TrueSheet with a native context menu (@expo/ui SwiftUI Menu) in
// its header. Tap "More actions": the menu opens on screen, but XCTest (and so
// Maestro, Detox, Appium) cannot find its items while the sheet is presented.
import { Button, Host, Menu, RNHostView } from '@expo/ui/swift-ui';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';

const noop = () => {};

export default function App() {
  const sheet = useRef<TrueSheet>(null);
  useEffect(() => {
    requestAnimationFrame(() => sheet.current?.present());
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen behind the sheet</Text>
      <TrueSheet
        ref={sheet}
        detents={[0.5, 1]}
        dimmed={false}
        dismissible={false}
        header={
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
            <Text style={{ flex: 1, fontSize: 17 }}>Sheet</Text>
            <Host matchContents>
              <Menu
                label={
                  <RNHostView matchContents>
                    <View
                      accessible
                      accessibilityRole='button'
                      accessibilityLabel='More actions'
                      style={{ padding: 8 }}
                    >
                      <Text style={{ fontSize: 22 }}>⋯</Text>
                    </View>
                  </RNHostView>
                }
              >
                <Button label='Edit' systemImage='pencil' onPress={noop} />
                <Button label='Share' systemImage='square.and.arrow.up' onPress={noop} />
                <Button label='Delete' systemImage='trash' role='destructive' onPress={noop} />
              </Menu>
            </Host>
          </View>
        }
      >
        <View style={{ padding: 16 }}>
          <Text>Sheet content</Text>
        </View>
      </TrueSheet>
    </View>
  );
}
